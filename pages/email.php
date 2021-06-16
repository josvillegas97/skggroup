<?php
//get data from form
$email = $_POST['email'];

$to = "josvillegas97@gmail.com";

$subject = "correo desde web";
$txt = "Email = " . $email ;

$headers = "From: josvillegas97@gmail.com" . "\r\n" .
"CC: somebyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    header("Location:../index.html");
}
//redirect
//
?>