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
    // Optimize DOMContentLoaded event handling
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("displayMessage").textContent = "Welcome to my GitHub repository!";
    });
</script>

</body>
</html>
