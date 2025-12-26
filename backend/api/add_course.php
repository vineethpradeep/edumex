<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

// Detect request type

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (strpos($contentType, 'multipart/form-data') !== false) {

    $data = $_POST;

    // Decode JSON fields from FormData
    $jsonFields = [
        "level",
        "modes",
        "tags",
        "whatYouLearn",
        "courseStructure",
        "subcourses"
    ];

    foreach ($jsonFields as $field) {
        if (isset($data[$field]) && is_string($data[$field])) {
            $decoded = json_decode($data[$field], true);
            $data[$field] = is_array($decoded) ? $decoded : [];
        }
    }

    //    Handle image upload
    if (!empty($_FILES['image']['name'])) {
        $uploadDir = "../uploads/courses/";
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $filename = time() . "_" . rand(1000, 9999) . "." . $ext;
        $filePath = $uploadDir . $filename;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
            $data["image"] = "uploads/courses/" . $filename;
        } else {
            echo json_encode(["success" => false, "message" => "Image upload failed"]);
            exit;
        }
    } else {
        $data["image"] = null;
    }
} else {
    //    JSON fallback
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        echo json_encode(["success" => false, "message" => "Invalid JSON"]);
        exit;
    }
}

// Normalize critical fields
$data["level"] = json_encode($data["level"] ?? []);
$data["modes"] = $data["modes"] ?? [];
$data["tags"] = $data["tags"] ?? [];
$data["whatYouLearn"] = $data["whatYouLearn"] ?? [];
$data["courseStructure"] = $data["courseStructure"] ?? [];
$data["subcourses"] = $data["subcourses"] ?? [];

try {
    $conn->beginTransaction();

    //    INSERT MAIN COURSE
    $stmt = $conn->prepare("
        INSERT INTO courses
    (category, level, title, description, entry_requirements, assessments, image, badge, credits, duration)
    VALUES (?, CAST(? AS JSON), ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $data["category"] ?? "",
        json_encode($data["level"] ?? []),
        $data["title"] ?? "",
        $data["description"] ?? "",
        $data["entryRequirements"] ?? null,
        $data["assessments"] ?? null,
        $data["image"],
        $data["badge"] ?? null,
        $data["courseBudget"] ?? null,
        $data["credits"] ?? null,
        $data["duration"] ?? null
    ]);

    $course_id = $conn->lastInsertId();

    // MODES
    if (!empty($data["modes"])) {
        $stmt = $conn->prepare("INSERT INTO course_modes (course_id, mode) VALUES (?, ?)");
        foreach ($data["modes"] as $mode) {
            $stmt->execute([$course_id, $mode]);
        }
    }

    // TAGS
    if (!empty($data["tags"])) {
        $stmt = $conn->prepare("INSERT INTO course_tags (course_id, tag) VALUES (?, ?)");
        foreach ($data["tags"] as $tag) {
            $stmt->execute([$course_id, $tag]);
        }
    }

    // WHAT YOU LEARN
    if (!empty($data["whatYouLearn"])) {
        $stmt = $conn->prepare("INSERT INTO course_what_you_learn (course_id, point) VALUES (?, ?)");
        foreach ($data["whatYouLearn"] as $point) {
            $stmt->execute([$course_id, $point]);
        }
    }

    // COURSE MODULES + UNITS
    foreach ($data["courseStructure"] as $module) {
        $stmt = $conn->prepare("INSERT INTO modules (course_id, module_name) VALUES (?, ?)");
        $stmt->execute([$course_id, $module["module"]]);
        $module_id = $conn->lastInsertId();

        foreach ($module["units"] ?? [] as $u) {
            $unitStmt = $conn->prepare("
                INSERT INTO units (module_id, title, credits, icon)
                VALUES (?, ?, ?, ?)
            ");
            $unitStmt->execute([
                $module_id,
                $u["title"],
                $u["credits"] ?? null,
                $u["icon"] ?? null
            ]);
        }
    }

    // SUBCOURSES
    foreach ($data["subcourses"] as $sub) {

        $stmt = $conn->prepare("
            INSERT INTO subcourses (course_id, title, overview)
            VALUES (?, ?, ?)
        ");
        $stmt->execute([
            $course_id,
            $sub["title"],
            $sub["overview"] ?? null
        ]);

        $subcourse_id = $conn->lastInsertId();

        foreach ($sub["whatYouLearn"] ?? [] as $point) {
            $learnStmt = $conn->prepare("
                INSERT INTO subcourse_what_you_learn (subcourse_id, point)
                VALUES (?, ?)
            ");
            $learnStmt->execute([$subcourse_id, $point]);
        }

        foreach ($sub["courseStructure"] ?? [] as $module) {
            $stmt = $conn->prepare("
                INSERT INTO modules (subcourse_id, module_name)
                VALUES (?, ?)
            ");
            $stmt->execute([$subcourse_id, $module["module"]]);
            $module_id = $conn->lastInsertId();

            foreach ($module["units"] ?? [] as $u) {
                $unitStmt = $conn->prepare("
                    INSERT INTO units (module_id, title, credits, icon)
                    VALUES (?, ?, ?, ?)
                ");
                $unitStmt->execute([
                    $module_id,
                    $u["title"],
                    $u["credits"] ?? null,
                    $u["icon"] ?? null
                ]);
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
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
