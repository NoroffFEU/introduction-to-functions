// declare the function
function addNumbers(num1, num2, num3) {
    // console.log(num1 + num2 + num3);
    return num1 + num2 + num3;
}

// call the function
var result = addNumbers(5, 10, 7);

console.log(result);


var heading = document.querySelector("h1");
var button = document.querySelector("button");
var buttonColours = document.querySelector(".colours");
var body = document.querySelector("body");

// console.dir(button);

function changeHeading() {
    heading.innerHTML = "updated heading";
}

button.onclick = changeHeading;


function changeColours() {
    body.style.backgroundColor = "orange";
    heading.style.color = "green";
}

buttonColours.onclick = changeColours;