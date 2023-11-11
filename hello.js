<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub JavaScript Display</title>
</head>
<body>

<h1 id="displayMessage">Hello, GitHub!</h1>

<script>
    // JavaScript code to display a message
    document.addEventListener("DOMContentLoaded", function() {
        var displayElement = document.getElementById("displayMessage");
        displayElement.innerHTML = "Welcome to my GitHub repository!";
    });
</script>

</body>
</html>
