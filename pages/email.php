<?php
//get data from form
$email = $_POST['email'];

$to = "josvillegas@upeu.edu.pe";

$subject = "correo desde web";
$txt = "Email = " . $email ;

$headers = "From: josvillegas@upeu.edu.pe" . "\r\n" .
"CC: somebyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    header("Location:../index.html");
}
//redirect
//
?>