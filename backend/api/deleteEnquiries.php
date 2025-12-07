<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "../db.php";

$id = intval($_GET['id'] ?? 0);
if (!$id) {
    echo json_encode(["success" => false, "message" => "Invalid ID"]);
    exit;
}

try {
    $stmt = $conn->prepare("DELETE FROM enquiries WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
