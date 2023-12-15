<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comment = $_POST["comment"];

    $to = "emmanuelsimona@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $comment";

    // Additional headers
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $message, $headers);

    // You can also send a response back to the client
    echo "Email sent successfully!";
} else {
    // Redirect or handle the error as needed
    echo "Invalid request";
}
?>
<!-- chmod -->