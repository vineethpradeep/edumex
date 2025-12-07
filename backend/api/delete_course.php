<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit;
}

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if (!$id) {
    echo json_encode(["success" => false, "message" => "Invalid course ID"]);
    exit;
}

try {
    // Delete from child tables first (subcourses, modes, tags, etc.)
    $conn->beginTransaction();

    $conn->exec("DELETE FROM course_what_you_learn WHERE course_id = $id");
    $conn->exec("DELETE FROM course_modes WHERE course_id = $id");
    $conn->exec("DELETE FROM course_tags WHERE course_id = $id");
    $conn->exec("DELETE FROM modules WHERE course_id = $id OR subcourse_id IN (SELECT id FROM subcourses WHERE course_id = $id)");
    $conn->exec("DELETE FROM units WHERE module_id IN (SELECT id FROM modules WHERE course_id = $id OR subcourse_id IN (SELECT id FROM subcourses WHERE course_id = $id))");
    $conn->exec("DELETE FROM subcourse_what_you_learn WHERE subcourse_id IN (SELECT id FROM subcourses WHERE course_id = $id)");
    $conn->exec("DELETE FROM subcourse_tags WHERE subcourse_id IN (SELECT id FROM subcourses WHERE course_id = $id)");
    $conn->exec("DELETE FROM subcourses WHERE course_id = $id");

    // Delete main course
    $stmt = $conn->prepare("DELETE FROM courses WHERE id = ?");
    $stmt->execute([$id]);

    $conn->commit();

    echo json_encode(["success" => true, "message" => "Course deleted successfully"]);
} catch (Exception $e) {
    $conn->rollBack();
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
