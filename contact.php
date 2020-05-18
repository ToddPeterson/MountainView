<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail_to = "petetodd@isu.edu";
    $headers = "From: ".$email;
    $outgoing_message = "New form submission from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $outgoing_message, $headers);
    header("Location: contact.html?mailsent")
}