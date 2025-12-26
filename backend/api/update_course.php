<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

/**
 * Decode JSON string OR return array safely
 */
function decodeField($value)
{
    if (is_array($value)) return $value;

    if (is_string($value)) {
        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }

    return [];
}

// --------------------------------------------------
// COURSE ID
// --------------------------------------------------
$course_id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// --------------------------------------------------
// READ REQUEST DATA
// --------------------------------------------------
$contentType = $_SERVER["CONTENT_TYPE"] ?? "";
$data = [];

if (strpos($contentType, "application/json") !== false) {
    $data = json_decode(file_get_contents("php://input"), true);
} else {
    $data = $_POST;
}

// --------------------------------------------------
// IMAGE UPLOAD
// --------------------------------------------------
if (!empty($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $filename = time() . "_" . rand(1000, 9999) . "." . $ext;
    $dir = __DIR__ . "/../uploads/courses/";

    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    if (move_uploaded_file($_FILES['image']['tmp_name'], $dir . $filename)) {
        $data['image'] = "uploads/courses/" . $filename;
    }
}

// --------------------------------------------------
// VALIDATION
// --------------------------------------------------
if (!$course_id || empty($data)) {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

// --------------------------------------------------
// NORMALIZE JSON FIELDS
// --------------------------------------------------
$level          = decodeField($data['level'] ?? []);
$levelJson = json_encode($level);
$modes          = decodeField($data['modes'] ?? []);
$tags           = decodeField($data['tags'] ?? []);
$whatYouLearn   = decodeField($data['whatYouLearn'] ?? []);
$courseStructure = decodeField($data['courseStructure'] ?? []);
$subcourses     = decodeField($data['subcourses'] ?? []);


var_dump($levelJson);

// --------------------------------------------------
// DATABASE TRANSACTION
// --------------------------------------------------
try {
    $conn->beginTransaction();

    // ---------------- MAIN COURSE UPDATE ----------------
    $stmt = $conn->prepare("
        UPDATE courses SET
            category = ?,
            level = CAST(? AS JSON),
            title = ?,
            description = ?,
            entry_requirements = ?,
            assessments = ?,
            image = ?,
            badge = ?,
            credits = ?,
            duration = ?
        WHERE id = ?
    ");

    $stmt->execute([
        $data['category'] ?? null,
        $levelJson,
        $data['title'] ?? null,
        $data['description'] ?? null,
        $data['entryRequirements'] ?? null,
        $data['assessments'] ?? null,
        $data['image'] ?? null,
        $data['badge'] ?? null,
        $data['credits'] ?? null,
        $data['duration'] ?? null,
        $course_id
    ]);

    // ---------------- CLEAR OLD RELATIONS ----------------
    $clearTables = [
        "course_modes",
        "course_tags",
        "course_what_you_learn",
        "modules",
        "subcourses"
    ];

    foreach ($clearTables as $table) {
        $conn->prepare("DELETE FROM $table WHERE course_id = ?")
            ->execute([$course_id]);
    }

    // ---------------- MODES ----------------
    if ($modes) {
        $stmt = $conn->prepare("INSERT INTO course_modes (course_id, mode) VALUES (?, ?)");
        foreach ($modes as $mode) {
            $stmt->execute([$course_id, $mode]);
        }
    }

    // ---------------- TAGS ----------------
    if ($tags) {
        $stmt = $conn->prepare("INSERT INTO course_tags (course_id, tag) VALUES (?, ?)");
        foreach ($tags as $tag) {
            $stmt->execute([$course_id, $tag]);
        }
    }

    // ---------------- WHAT YOU LEARN ----------------
    if ($whatYouLearn) {
        $stmt = $conn->prepare("INSERT INTO course_what_you_learn (course_id, point) VALUES (?, ?)");
        foreach ($whatYouLearn as $point) {
            $stmt->execute([$course_id, $point]);
        }
    }

    // ---------------- COURSE STRUCTURE ----------------
    foreach ($courseStructure as $module) {
        $stmt = $conn->prepare("INSERT INTO modules (course_id, module_name) VALUES (?, ?)");
        $stmt->execute([$course_id, $module['module'] ?? '']);
        $module_id = $conn->lastInsertId();

        foreach ($module['units'] ?? [] as $unit) {
            $conn->prepare("
                INSERT INTO units (module_id, title, credits, icon)
                VALUES (?, ?, ?, ?)
            ")->execute([
                $module_id,
                $unit['title'] ?? '',
                $unit['credits'] ?? null,
                $unit['icon'] ?? null
            ]);
        }
    }

    // ---------------- SUBCOURSES ----------------
    foreach ($subcourses as $sub) {
        $stmt = $conn->prepare("
            INSERT INTO subcourses (course_id, title, overview)
            VALUES (?, ?, ?)
        ");
        $stmt->execute([
            $course_id,
            $sub['title'] ?? '',
            $sub['overview'] ?? null
        ]);
        $subcourse_id = $conn->lastInsertId();

        foreach (decodeField($sub['tags'] ?? []) as $tag) {
            $conn->prepare("
                INSERT INTO subcourse_tags (subcourse_id, tag)
                VALUES (?, ?)
            ")->execute([$subcourse_id, $tag]);
        }

        foreach (decodeField($sub['whatYouLearn'] ?? []) as $point) {
            $conn->prepare("
                INSERT INTO subcourse_what_you_learn (subcourse_id, point)
                VALUES (?, ?)
            ")->execute([$subcourse_id, $point]);
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
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
