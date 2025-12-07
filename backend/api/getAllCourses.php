<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

try {
    // FETCH ALL MAIN COURSES
    $stmt = $conn->prepare("
        SELECT 
            id, category, level, title, description, 
            entry_requirements, assessments, badge, 
            credits, duration, image
        FROM courses
        ORDER BY id DESC
    ");
    $stmt->execute();
    $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $response = [];

    foreach ($courses as $course) {
        $course_id = $course["id"];

        // FETCH MODES
        $modeStmt = $conn->prepare("SELECT mode FROM course_modes WHERE course_id = ?");
        $modeStmt->execute([$course_id]);
        $modes = $modeStmt->fetchAll(PDO::FETCH_COLUMN);

        // FETCH TAGS
        $tagStmt = $conn->prepare("SELECT tag FROM course_tags WHERE course_id = ?");
        $tagStmt->execute([$course_id]);
        $tags = $tagStmt->fetchAll(PDO::FETCH_COLUMN);

        // FETCH WHAT YOU LEARN
        $learnStmt = $conn->prepare("SELECT point FROM course_what_you_learn WHERE course_id = ?");
        $learnStmt->execute([$course_id]);
        $whatYouLearn = $learnStmt->fetchAll(PDO::FETCH_COLUMN);

        // FETCH SUBCOURSE COUNT
        $subStmt = $conn->prepare("
            SELECT id, title, overview 
            FROM subcourses 
            WHERE course_id = ?
        ");
        $subStmt->execute([$course_id]);
        $subcourses = $subStmt->fetchAll(PDO::FETCH_ASSOC);

        // IMAGE FULL PATH
        if (!empty($course["image"])) {
            $course["image"] = "http://localhost:8000/" . $course["image"];
        } else {
            $course["image"] = null;
        }

        // BUILD COMPLETE RESPONSE
        $response[] = [
            "id" => $course_id,
            "category" => $course["category"],
            "level" => $course["level"],
            "title" => $course["title"],
            "description" => $course["description"],
            "entryRequirements" => $course["entry_requirements"],
            "assessments" => $course["assessments"],
            "badge" => $course["badge"],
            "credits" => $course["credits"],
            "duration" => $course["duration"],
            "image" => $course["image"],
            "modes" => $modes,
            "tags" => $tags,
            "whatYouLearn" => $whatYouLearn,
            "subcourses" => $subcourses
        ];
    }

    echo json_encode([
        "success" => true,
        "courses" => $response
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
