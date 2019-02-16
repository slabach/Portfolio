<?php
    session_start();

    require_once ('php/database.php');
    // require_once ('php/contactSubmit.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Byron Slabach</title>
    <link rel="stylesheet" href="css\font-awesome.min.css">
    <link rel="stylesheet" href="dist\css\styles.min.css">
</head>
<body>
    
    <div class='header'>
        <div class='hdrBackground'></div>
        <div class="photo">

        </div>
        <ul>
            <li id='homeNav'>HOME</li>
            <li id='projNav'>PROJECTS</li>
            <li id='contNav'>CONTACT</li>
        </ul>
        <div class='socialLinks'>

        </div>
    </div>

    <div class='bodyContent'>
        <div class='home'>
            <?php getplayers(); ?>
        </div>
        <div class='projects'>PROJECTS</div>
        <div class='contact'>CONTACT</div>
    </div>

    <div class='footer'></div>

<script src="node_modules\jquery\dist\jquery.min.js"></script>

<script src="js\app.js"></script>
</body>
</html>