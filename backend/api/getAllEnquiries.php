<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "../db.php";

try {
    $stmt = $conn->query("SELECT * FROM enquiries ORDER BY created_at DESC");
    $enquiries = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(["success" => true, "enquiries" => $enquiries]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
