<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php";

$data = json_decode(file_get_contents("php://input"));

$username = $data->username ?? "";
$password = $data->password ?? "";

try {
    $query = $conn->prepare("SELECT * FROM admin WHERE username = ?");
    $query->execute([$username]);
    $admin = $query->fetch(PDO::FETCH_ASSOC);

    if (!$admin) {
        echo json_encode(["success" => false, "message" => "Invalid username"]);
        exit;
    }

    if ($password === $admin['password']) {
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "admin" => [
                "id" => $admin['id'],
                "username" => $admin['username']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
