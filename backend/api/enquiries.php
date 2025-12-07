<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include "../db.php"; // DB connection

// Get JSON input
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

// Required fields
$required = ["firstName", "lastName", "email", "course"];
foreach ($required as $field) {
    if (empty($input[$field])) {
        echo json_encode(["success" => false, "message" => "$field is required"]);
        exit;
    }
}

// Collect fields
$firstName = $input["firstName"];
$lastName  = $input["lastName"];
$email     = $input["email"];
$phone     = $input["phone"] ?? "";
$course    = $input["course"];
$education = $input["education"] ?? "";
$experience = $input["experience"] ?? "";
$motivation = $input["motivation"] ?? "";
$schedule   = $input["schedule"] ?? "flexible";
$terms      = !empty($input["terms"]) ? 1 : 0;
$newsletter = !empty($input["newsletter"]) ? 1 : 0;

// NEW FIELDS
$location = $input["location"] ?? "";
$dob      = $input["dob"] ?? null;

$status = "new"; // default enrollment status

try {
    $stmt = $conn->prepare("
        INSERT INTO enquiries 
        (first_name, last_name, email, phone, course, education, experience, motivation, 
         schedule, terms, newsletter, location, dob, status, created_at)
        VALUES 
        (:first_name, :last_name, :email, :phone, :course, :education, :experience, :motivation,
         :schedule, :terms, :newsletter, :location, :dob, :status, NOW())
    ");

    $stmt->execute([
        ":first_name" => $firstName,
        ":last_name"  => $lastName,
        ":email"      => $email,
        ":phone"      => $phone,
        ":course"     => $course,
        ":education"  => $education,
        ":experience" => $experience,
        ":motivation" => $motivation,
        ":schedule"   => $schedule,
        ":terms"      => $terms,
        ":newsletter" => $newsletter,
        ":location"   => $location,
        ":dob"        => $dob,
        ":status"     => $status,
    ]);

    echo json_encode(["success" => true, "message" => "Enrollment submitted successfully"]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
