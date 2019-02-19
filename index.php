<?php
    session_start();

    require_once ('php/database.php');
    require_once ('php/projects.php');
    // require_once ('php/contactSubmit.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Byron Slabach</title>
    <link rel="stylesheet" href="css\font-awesome.min.css">
    <link rel="stylesheet" href="dist\css\styles.min.css">
</head>
<body>
    
    <div class='header'>
        <div class='hdrBackground'></div>
        <div class="photo">
            <img src='\includes\portrait.JPG'>
        </div>
        <ul>
            <li id='homeNav'>HOME</li>
            <li id='projectsNav'>PROJECTS</li>
            <li id='contactNav'>CONTACT</li>
        </ul>
        <div class='socialLinks'>

        </div>
    </div>

    <div class='bodyContent'>
        <!-- <div class='home'>
            HOME
        </div> -->
        <div class='projects'>
            <?php getProjects(); ?>
        </div>
        <!-- <div class='contact'>CONTACT</div> -->
    </div>

    <div class='footer'></div>

<script src="node_modules\jquery\dist\jquery.min.js"></script>

<script src="js\app.js"></script>
</body>
</html>