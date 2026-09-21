// Get HTML elements
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const image = document.getElementById("myImage");

const contentBtn = document.getElementById("contentBtn");
const styleBtn = document.getElementById("styleBtn");
const attributeBtn = document.getElementById("attributeBtn");


// Change HTML content
contentBtn.addEventListener("click", function () {

    heading.textContent = "Content Changed Successfully!";
    message.textContent = "JavaScript changed this text using the DOM.";

});


// Change CSS style
styleBtn.addEventListener("click", function () {

    heading.style.color = "blue";
    heading.style.fontSize = "35px";

    message.style.backgroundColor = "lightgray";
    message.style.padding = "15px";

});


// Change HTML attribute
attributeBtn.addEventListener("click", function () {

    image.setAttribute(
        "src",
        "https://via.placeholder.com/300"
    );

    image.setAttribute(
        "alt",
        "New Image"
    );

});
