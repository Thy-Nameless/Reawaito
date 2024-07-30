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
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script src="scripts/jquery.js"></script>
    <script src="scripts/sweetalert2.min.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/index.js"></script>
    
    <script src="https://cdnapp.websitepolicies.com/widgets/cookies/lnkjdr5s.js" defer></script>
    <title>Reawaito</title>

</head>
<body class="loader">
    <div id='modehover' class='unbinded'></div>
    <div id='lightmode'>
        <img class='switchmode' src='icons/light.png' alt='dark mode'></img>
        <div id='main'>
            <p id='maintext'>reawaito.</p>
            <p id='mainsubtext'>because our founder was bored.</p>
        </div>
        <!--<div class='arrowhover' class='hoverswap'><img class='arrow' src='icons/arrowdark.png' alt='next page'></img></div>-->
        <div class='arrowhover' class='hoverswap'><img class='arrownm' src='icons/arrowdarksmall.png'></img><img class='arrow' src='icons/arrowdarksmall.png'></img></div>
        <img class='switchArrow' src='icons/arrowdarksmall.png'>
        <!--<div id='middleline'></div>-->
    </div>
    <div id='darkmode'>
        <img class='switchmode' src='icons/dark.png' alt='light mode'></img>
        <div id='main'>
            <p id='maintext'>reawaito.</p>
            <p id='mainsubtext'>because our founder was bored.</p>
        </div>
        <!--<div class='arrowhover' class='hoverswap'><img class='arrow' src='icons/arrowlight.png' alt='next page'></img></div>-->
        <div class='arrowhover' class='hoverswap'><img class='arrownm' src='icons/arrowlightsmall.png'></img><img class='arrow' src='icons/arrowlightsmall.png'></img></div>
        <img class='switchArrow' src='icons/arrowlightsmall.png'>
        <!--<div id='middleline'></div>-->
    </div>
    <div id='innerwebsite'>
        <div>games.</div>
        <div>music.</div>
        <div>web apps.</div>
        <div>contact.</div>
        <div class='arrowhover' class='hoverswap'><img class='arrownm' src='icons/arrowlightsmall.png'></img><img class='arrow' src='icons/arrowlightsmall.png'></img></div>
        <img class='switchArrow' src='icons/arrowlightsmall.png'>
    </div>
</body>
</html>