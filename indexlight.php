<?php
ini_set('display_errors',0);
session_start();
if (!isset($_SESSION['user'])) {
    $location = 'index';
    include 'php/checkForUser.php';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/png" href="icons/logo.png"/>
    <link rel="stylesheet" type="text/css" href="css/indexlight.css">

    <script src="scripts/jquery.js"></script>
    <script src="scripts/sweetalert2.min.js"></script>
    
    <script src="https://cdnapp.websitepolicies.com/widgets/cookies/lnkjdr5s.js" defer></script>
    <title>Reawaito</title>

</head>
<body class="loader">
    <div id='lightmode'>
        <img class='switchmode' src='icons/light.png' alt='dark mode'></img>
        <div id='main'>
            <p id='maintext'>reawaito.</p>
            <p id='mainsubtext'>because our founder was bored.</p>
        </div>
    </div>
    <div id='darkmode'>
        <img class='switchmode' src='icons/dark.png' alt='light mode'></img>
        <div id='main'>
            <p id='maintext'>reawaito.</p>
            <p id='mainsubtext'>because our founder was bored.</p>
        </div>
    </div>
</body>
</html>