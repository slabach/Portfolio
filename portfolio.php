<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        window.onload = function() {
            localStorage.setItem('url',2);
            // similar behavior as clicking on a link
            window.location.replace("https://dev.slabach.one/");
        }
    </script>
</body>
</html>