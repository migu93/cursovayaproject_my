<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $feedback = $_POST["feedback"];

    $to = "youremail@example.com";
    $subject = "Feedback from $name";
    $message = "Name: $name\nEmail: $email\nMessage: $feedback";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your feedback has been sent successfully.";
    } else {
        echo "An error occurred while sending your feedback. Please try again later.";
    }
}
