<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

// $data = json_decode(file_get_contents("php://input"), true);


// if (!$data) {
//     echo json_encode(["success" => false, "message" => "Invalid JSON"]);
//     exit;
// }

// Check if it's multipart/form-data (file upload)
if ($_SERVER['CONTENT_TYPE'] ?? '' !== '' && strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') !== false) {

    // Build JSON-like $data array from POST
    $data = $_POST;

    // Decode JSON fields coming from FormData
    $jsonFields = ["modes", "tags", "whatYouLearn", "courseStructure", "subcourses"];
    foreach ($jsonFields as $field) {
        if (isset($data[$field]) && is_string($data[$field])) {
            $decoded = json_decode($data[$field], true);
            $data[$field] = is_array($decoded) ? $decoded : [];
        }
    }
    // Handle image upload
    if (!empty($_FILES['image']['name'])) {
        $uploadDir = "../uploads/courses/";
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $filename = time() . "_" . rand(1000, 9999) . "." . $ext;
        $filePath = $uploadDir . $filename;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
            $data["image"] = "uploads/courses/" . $filename;  // Save relative path
        } else {
            echo json_encode(["success" => false, "message" => "Image upload failed"]);
            exit;
        }
    } else {
        $data["image"] = null;
    }
} else {
    // JSON request fallback
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        echo json_encode(["success" => false, "message" => "Invalid JSON"]);
        exit;
    }
}



try {
    $conn->beginTransaction();

    // INSERT MAIN COURSE
    $stmt = $conn->prepare("
        INSERT INTO courses 
        (category, level, title, description, entry_requirements, assessments, image, badge, credits, duration)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $data["category"],
        $data["level"],
        $data["title"],
        $data["description"],
        $data["entryRequirements"] ?? null,
        $data["assessments"] ?? null,
        $data["image"] ?? null,
        $data["badge"] ?? null,
        $data["credits"] ?? null,
        $data["duration"] ?? null
    ]);

    $course_id = $conn->lastInsertId();

    // INSERT COURSE MODES
    if (!empty($data["modes"])) {
        $stmt = $conn->prepare("INSERT INTO course_modes (course_id, mode) VALUES (?, ?)");
        foreach ($data["modes"] as $mode) {
            $stmt->execute([$course_id, $mode]);
        }
    }

    // INSERT COURSE TAGS
    if (!empty($data["tags"])) {
        $stmt = $conn->prepare("INSERT INTO course_tags (course_id, tag) VALUES (?, ?)");
        foreach ($data["tags"] as $tag) {
            $stmt->execute([$course_id, $tag]);
        }
    }

    // INSERT MAIN COURSE WHAT YOU LEARN
    if (!empty($data["whatYouLearn"])) {
        $stmt = $conn->prepare("INSERT INTO course_what_you_learn (course_id, point) VALUES (?, ?)");
        foreach ($data["whatYouLearn"] as $point) {
            $stmt->execute([$course_id, $point]);
        }
    }

    // INSERT PARENT COURSE MODULES + UNITS
    if (!empty($data["courseStructure"])) {
        foreach ($data["courseStructure"] as $module) {
            // Insert module
            $stmt = $conn->prepare("INSERT INTO modules (course_id, module_name) VALUES (?, ?)");
            $stmt->execute([$course_id, $module["module"]]);
            $module_id = $conn->lastInsertId();

            // Insert units
            if (!empty($module["units"])) {
                $unitStmt = $conn->prepare("INSERT INTO units (module_id, title, credits, icon) VALUES (?, ?, ?, ?)");
                foreach ($module["units"] as $u) {
                    $unitStmt->execute([
                        $module_id,
                        $u["title"],
                        $u["credits"] ?? null,
                        $u["icon"] ?? null
                    ]);
                }
            }
        }
    }

    // INSERT SUBCOURSES
    if (!empty($data["subcourses"])) {
        foreach ($data["subcourses"] as $sub) {
            // Insert subcourse
            $stmt = $conn->prepare("INSERT INTO subcourses (course_id, title, overview) VALUES (?, ?, ?)");
            $stmt->execute([
                $course_id,
                $sub["title"],
                $sub["overview"] ?? null
            ]);

            $subcourse_id = $conn->lastInsertId();

            // Subcourse tags
            if (!empty($sub["tags"])) {
                $tagStmt = $conn->prepare("INSERT INTO subcourse_tags (subcourse_id, tag) VALUES (?, ?)");
                foreach ($sub["tags"] as $tag) {
                    $tagStmt->execute([$subcourse_id, $tag]);
                }
            }

            // Subcourse what you learn
            if (!empty($sub["whatYouLearn"])) {
                $learnStmt = $conn->prepare("INSERT INTO subcourse_what_you_learn (subcourse_id, point) VALUES (?, ?)");
                foreach ($sub["whatYouLearn"] as $point) {
                    $learnStmt->execute([$subcourse_id, $point]);
                }
            }

            // Subcourse modules + units
            if (!empty($sub["courseStructure"])) {
                foreach ($sub["courseStructure"] as $module) {
                    $stmt = $conn->prepare("INSERT INTO modules (subcourse_id, module_name) VALUES (?, ?)");
                    $stmt->execute([$subcourse_id, $module["module"]]);
                    $module_id = $conn->lastInsertId();

                    if (!empty($module["units"])) {
                        $unitStmt = $conn->prepare("INSERT INTO units (module_id, title, credits, icon) VALUES (?, ?, ?, ?)");
                        foreach ($module["units"] as $u) {
                            $unitStmt->execute([
                                $module_id,
                                $u["title"],
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
        "message" => "Course added successfully",
        "course_id" => $course_id
    ]);
} catch (Exception $e) {
    $conn->rollBack();
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
