<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . '://' . $host;

include "../db.php";

$id = $_GET["id"] ?? 0;

try {
    // FETCH MAIN COURSE
    $stmt = $conn->prepare("SELECT * FROM courses WHERE id = ?");
    $stmt->execute([$id]);
    $course = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$course) {
        echo json_encode(["success" => false, "message" => "Course not found"]);
        exit;
    }

    // FETCH MODES
    $modeStmt = $conn->prepare("SELECT mode FROM course_modes WHERE course_id = ?");
    $modeStmt->execute([$id]);
    $modes = $modeStmt->fetchAll(PDO::FETCH_COLUMN);

    // FETCH TAGS
    $tagStmt = $conn->prepare("SELECT tag FROM course_tags WHERE course_id = ?");
    $tagStmt->execute([$id]);
    $tags = $tagStmt->fetchAll(PDO::FETCH_COLUMN);

    // WHAT YOU LEARN
    $learnStmt = $conn->prepare("SELECT point FROM course_what_you_learn WHERE course_id = ?");
    $learnStmt->execute([$id]);
    $whatYouLearn = $learnStmt->fetchAll(PDO::FETCH_COLUMN);

    // MODULES + UNITS (Parent Course)
    $modStmt = $conn->prepare("SELECT id, module_name FROM modules WHERE course_id = ?");
    $modStmt->execute([$id]);
    $modules = $modStmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($modules as $i => $m) {
        $unitStmt = $conn->prepare("SELECT title, credits FROM units WHERE module_id = ?");
        $unitStmt->execute([$m["id"]]);
        $modules[$i]["units"] = $unitStmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // SUBCOURSES + THEIR MODULES + UNITS
    $subStmt = $conn->prepare("SELECT id, title, overview FROM subcourses WHERE course_id = ?");
    $subStmt->execute([$id]);
    $subcourses = $subStmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($subcourses as $i => $sub) {
        // Fetch modules for each subcourse
        $subModStmt = $conn->prepare("SELECT id, module_name FROM modules WHERE subcourse_id = ?");
        $subModStmt->execute([$sub['id']]);
        $subModules = $subModStmt->fetchAll(PDO::FETCH_ASSOC);

        // Fetch units for each module
        foreach ($subModules as $j => $mod) {
            $unitStmt = $conn->prepare("SELECT title, credits FROM units WHERE module_id = ?");
            $unitStmt->execute([$mod['id']]);
            $subModules[$j]['units'] = $unitStmt->fetchAll(PDO::FETCH_ASSOC);
        }

        $subcourses[$i]['modules'] = $subModules;
    }

    echo json_encode([
        "success" => true,
        "course" => [
            ...$course,
            "image" => !empty($course["image"])
                ? $baseUrl . '/' . ltrim($course["image"], '/')
                : null,
            "modes" => $modes,
            "tags" => $tags,
            "whatYouLearn" => $whatYouLearn,
            "modules" => $modules,
            "subcourses" => $subcourses
        ]
    ]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
