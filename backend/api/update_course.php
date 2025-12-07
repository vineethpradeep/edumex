<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

// Helper function to safely decode JSON or return array as-is
function decodeField($field)
{
    if (is_string($field)) {
        $decoded = json_decode($field, true);
        return is_array($decoded) ? $decoded : [];
    } elseif (is_array($field)) {
        return $field;
    }
    return [];
}

// Get course ID
$course_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Determine content type
$data = null;
$contentType = $_SERVER["CONTENT_TYPE"] ?? '';

if (strpos($contentType, "application/json") !== false) {
    $data = json_decode(file_get_contents("php://input"), true);
} elseif (strpos($contentType, "multipart/form-data") !== false) {
    $data = $_POST;
}

// Get uploaded image
$imagePath = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $newName = time() . "_" . rand(1000, 9999) . "." . $ext;
    $uploadDir = __DIR__ . "/../uploads/courses/";
    if (!file_exists($uploadDir)) mkdir($uploadDir, 0755, true);
    $targetFile = $uploadDir . $newName;
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        $imagePath = "uploads/courses/" . $newName;
    }
}

// Use uploaded image if present
if ($imagePath) {
    $data['image'] = $imagePath;
}

// Check data and course ID
if (!$data || !$course_id) {
    echo json_encode(["success" => false, "message" => "Invalid data or course ID"]);
    exit;
}

// Decode array fields safely
$modes = decodeField($data['modes'] ?? []);
$tags = decodeField($data['tags'] ?? []);
$whatYouLearn = decodeField($data['whatYouLearn'] ?? []);
$courseStructure = decodeField($data['courseStructure'] ?? []);
$subcourses = decodeField($data['subcourses'] ?? []);

try {
    $conn->beginTransaction();

    // --- UPDATE MAIN COURSE ---
    $stmt = $conn->prepare("
        UPDATE courses SET 
            category = ?, level = ?, title = ?, description = ?, 
            entry_requirements = ?, assessments = ?, image = ?, badge = ?, credits = ?, duration = ?
        WHERE id = ?
    ");
    $stmt->execute([
        $data["category"] ?? null,
        $data["level"] ?? null,
        $data["title"] ?? null,
        $data["description"] ?? null,
        $data["entryRequirements"] ?? null,
        $data["assessments"] ?? null,
        $data["image"] ?? null,
        $data["badge"] ?? null,
        $data["credits"] ?? null,
        $data["duration"] ?? null,
        $course_id
    ]);

    // --- DELETE OLD RELATED DATA ---
    $tablesToClear = [
        "course_modes" => "course_id",
        "course_tags" => "course_id",
        "course_what_you_learn" => "course_id",
        "modules" => "course_id",
        "subcourses" => "course_id"
    ];

    foreach ($tablesToClear as $table => $col) {
        $conn->prepare("DELETE FROM $table WHERE $col = ?")->execute([$course_id]);
    }

    // --- INSERT NEW RELATED DATA ---

    // Course Modes
    if (!empty($modes)) {
        $stmt = $conn->prepare("INSERT INTO course_modes (course_id, mode) VALUES (?, ?)");
        foreach ($modes as $mode) {
            $stmt->execute([$course_id, $mode]);
        }
    }

    // Course Tags
    if (!empty($tags)) {
        $stmt = $conn->prepare("INSERT INTO course_tags (course_id, tag) VALUES (?, ?)");
        foreach ($tags as $tag) {
            $stmt->execute([$course_id, $tag]);
        }
    }

    // Course What You Learn
    if (!empty($whatYouLearn)) {
        $stmt = $conn->prepare("INSERT INTO course_what_you_learn (course_id, point) VALUES (?, ?)");
        foreach ($whatYouLearn as $point) {
            $stmt->execute([$course_id, $point]);
        }
    }

    // Parent Course Modules + Units
    if (!empty($courseStructure)) {
        foreach ($courseStructure as $module) {
            $stmt = $conn->prepare("INSERT INTO modules (course_id, module_name) VALUES (?, ?)");
            $stmt->execute([$course_id, $module["module"] ?? ""]);
            $module_id = $conn->lastInsertId();

            if (!empty($module["units"])) {
                $unitStmt = $conn->prepare("INSERT INTO units (module_id, title, credits, icon) VALUES (?, ?, ?, ?)");
                foreach ($module["units"] as $u) {
                    $unitStmt->execute([
                        $module_id,
                        $u["title"] ?? "",
                        $u["credits"] ?? null,
                        $u["icon"] ?? null
                    ]);
                }
            }
        }
    }

    // Subcourses + Related Data
    if (!empty($subcourses)) {
        foreach ($subcourses as $sub) {
            $stmt = $conn->prepare("INSERT INTO subcourses (course_id, title, overview) VALUES (?, ?, ?)");
            $stmt->execute([
                $course_id,
                $sub["title"] ?? "",
                $sub["overview"] ?? null
            ]);
            $subcourse_id = $conn->lastInsertId();

            // Subcourse Tags
            $subTags = decodeField($sub["tags"] ?? []);
            if (!empty($subTags)) {
                $tagStmt = $conn->prepare("INSERT INTO subcourse_tags (subcourse_id, tag) VALUES (?, ?)");
                foreach ($subTags as $tag) {
                    $tagStmt->execute([$subcourse_id, $tag]);
                }
            }

            // Subcourse What You Learn
            $subLearn = decodeField($sub["whatYouLearn"] ?? []);
            if (!empty($subLearn)) {
                $learnStmt = $conn->prepare("INSERT INTO subcourse_what_you_learn (subcourse_id, point) VALUES (?, ?)");
                foreach ($subLearn as $point) {
                    $learnStmt->execute([$subcourse_id, $point]);
                }
            }

            // Subcourse Modules + Units
            $subModules = decodeField($sub["courseStructure"] ?? []);
            if (!empty($subModules)) {
                foreach ($subModules as $module) {
                    $stmt = $conn->prepare("INSERT INTO modules (subcourse_id, module_name) VALUES (?, ?)");
                    $stmt->execute([$subcourse_id, $module["module"] ?? ""]);
                    $module_id = $conn->lastInsertId();

                    if (!empty($module["units"])) {
                        $unitStmt = $conn->prepare("INSERT INTO units (module_id, title, credits, icon) VALUES (?, ?, ?, ?)");
                        foreach ($module["units"] as $u) {
                            $unitStmt->execute([
                                $module_id,
                                $u["title"] ?? "",
                                $u["credits"] ?? null,
                                $u["icon"] ?? null
                            ]);
                        }
                    }
                }
            }
        }
    }

    $conn->commit();

    echo json_encode([
        "success" => true,
        "message" => "Course updated successfully",
        "course_id" => $course_id
    ]);
} catch (Exception $e) {
    $conn->rollBack();
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
