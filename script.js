
let buttonElement1 = document.getElementById('myButton');


buttonElement1.addEventListener('click', function () {

    let inputElement = document.getElementById('Email');

    let inputValue = inputElement.value;

    console.log(inputValue);
});

let buttonElement2 = document.getElementById('myButton');


buttonElement2.addEventListener('click', function () {

    let inputElement = document.getElementById('Password');

    let inputValue = inputElement.value;

    console.log(inputValue);
});


document.getElementById('myForm').addEventListener("submit", function (event) {
    const emailinput = document.getElementById("Email");
    const errorspan = document.getElementById("error");

    if (emailinput.value.trim() == "") {
        errorspan.style.display = "inline";
        event.preventDefault();
    } else {
        errorspan.style.display = "none";
    }
});

document.getElementById('myForm').addEventListener("submit", function (event) {
    const emailinput = document.getElementById("Password");
    const errorspan = document.getElementById("errorPassword");

    if (emailinput.value.trim() == "") {
        errorspan.style.display = "inline";
        event.preventDefault();
    } else {
        errorspan.style.display = "none";
    }
});