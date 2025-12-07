<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "../db.php"; // DB connection

// Check for ID
if (!isset($_GET["id"]) || empty($_GET["id"])) {
    echo json_encode([
        "success" => false,
        "message" => "Enquiry ID is required"
    ]);
    exit;
}

$enquiryId = intval($_GET["id"]);

try {
    $stmt = $conn->prepare("
        SELECT 
            id,
            first_name,
            last_name,
            email,
            phone,
            course,
            education,
            experience,
            motivation,
            schedule,
            terms,
            newsletter,
            location,
            dob,
            status,
            created_at
        FROM enquiries
        WHERE id = :id
        LIMIT 1
    ");

    $stmt->execute([":id" => $enquiryId]);
    $enquiry = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($enquiry) {
        echo json_encode(["success" => true, "enquiry" => $enquiry]);
    } else {
        echo json_encode(["success" => false, "message" => "Enquiry not found"]);
    }
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
