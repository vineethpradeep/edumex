<?php
$host = "127.0.0.1" ?? "localhost";
$username = "root";
$password = "";
$db_name = "edumex_db";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
    exit;
}
