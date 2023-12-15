<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comment = $_POST["comment"];

    $to = "emmanuelsimona@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $comment";

    // Set your Gmail SMTP settings
    $smtpHost = "smtp.gmail.com";
    $smtpUsername = ""; // Replace with your Gmail email address
    $smtpPassword = ""; // Replace with your Gmail password
    $smtpPort = 587; // Use 587 for TLS, 465 for SSL

    // Additional headers
    $headers = "From: $email";

    // Set up PHPMailer (make sure to include the PHPMailer library)
    require 'path/to/PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = 'tls'; // Use 'tls' for TLS, 'ssl' for SSL
    $mail->Port = $smtpPort;

    $mail->setFrom($email);
    $mail->addAddress($to);
    $mail->Subject = $subject;
    $mail->Body = $message;

    if ($mail->send()) {
        echo "Email sent successfully!";
    } else {
        echo "Error submitting form. Please try again later. Error: " . $mail->ErrorInfo;
    }
} else {
    // Redirect or handle the error as needed
    echo "Invalid request";
}
?>
