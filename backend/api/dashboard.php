<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "../db.php";

// Course Count
$courseCount = $conn->query("SELECT COUNT(*) FROM courses")->fetchColumn();

// Enquiry Count
$enquiryCount = $conn->query("SELECT COUNT(*) FROM enquiries")->fetchColumn();

// New enquiries (status = 'new')
$newEnquiries = $conn->query("SELECT COUNT(*) FROM enquiries WHERE status = 'new'")->fetchColumn();

// Recent 5 enquiries
$recentEnquiries = $conn->query("
    SELECT id, first_name, last_name, email, course, created_at 
    FROM enquiries 
    ORDER BY created_at DESC 
    LIMIT 5
")->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    "success" => true,
    "data" => [
        "courseCount" => $courseCount,
        "enquiryCount" => $enquiryCount,
        "newEnquiries" => $newEnquiries,
        "recentEnquiries" => $recentEnquiries
    ]
]);
