<?php 
//if(isset($_POST['submit'])){
    $to = "friendrpgth@gmail.com";
    $name = $_POST['name'];
    $subject = "AOTTG Friend Mod";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['comment'];
    $headers = "[" . $_POST['section'] . "] From:" . $name;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will accept your submit shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    //}
?>