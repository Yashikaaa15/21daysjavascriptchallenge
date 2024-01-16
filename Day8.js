index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 8 </title>
    <script defer src="Day8.js"></script>
</head>
<body>
    <div id="dynamicDiv"></div>
</body>
</html>
index.js
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Create a new <p> element
    var paragraphElement = document.createElement("p");

    // Set the text content of the <p> element
    paragraphElement.textContent = "This is a dynamically created paragraph!";

    // Select the empty <div> with id "dynamicDiv"
    var dynamicDiv = document.getElementById("dynamicDiv");

    // Append the newly created <p> element to the <div>
    dynamicDiv.appendChild(paragraphElement);
});
