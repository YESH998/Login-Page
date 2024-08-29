
let buttonElement1 = document.getElementById('myButton');


buttonElement1.addEventListener('click', function (e) {
    e.preventDefault()
    let inputElement = document.getElementById('Email');
    let inputValue = inputElement.value;
    vadlidate()
    passwordVadlidate();
});

let buttonElement2 = document.getElementById('myButton');


buttonElement2.addEventListener('click', function (e) {
    e.preventDefault();

    let inputElement = document.getElementById('Password');

    let inputValue = inputElement.value;

    console.log(inputValue);
});


function vadlidate() {
    // email  validation
    const emailinput = document.getElementById("Email");
    const errorspan = document.getElementById("error");
    // emailInput == ksd
    const len = emailinput.value.length
    if (emailinput.value.trim() == "") {
        errorspan.style.display = "inline";
        errorspan.innerHTML = "Please enter Email"
    } else if (len < 5) {
        errorspan.innerHTML = "Please enter atleast 5 letter"
        errorspan.style.display = "inline";
    } else if (len > 10) {
        errorspan.innerHTML = "Please enter valid email"
        errorspan.style.display = "inline";
    } else {
        errorspan.style.display = "none";
    }
}
// password validation
function passwordVadlidate() {

    const passwordinput = document.getElementById("Password");
    const errorpass = document.getElementById("errorPassword");

    const length = passwordinput.value.length;
    const uppercasePattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*]/
    const digitPattern = /\d/;
    if (passwordinput.value.trim() == "") {
        errorpass.style.display = "inline";
        errorpass.innerHTML = "Please Enter Password"
    } else if (length < 8) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Enter atleast 8 digit password";
    } else if ((!uppercasePattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use one UpperCase letter";

    } else if ((!specialCharacterPattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use one Special Character";

    } else if ((!digitPattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use one integer Value";

    } else {
        errorpass.style.display = "none";
    }
};

let element = document.getElementById('eyeButton');
document.getElementById('eyeButton').addEventListener('click', function () {
    // alert("hello")
    const passValue = document.getElementById('Password');
    if (passValue.type == "text") {
        passValue.type = "password"
        element.style.display = "inline"
    }
    else {
        passValue.type = "text"
        element.style.display = "none"
        closeElement.style.display="inline"
    }

}
);

let closeElement = document.getElementById('closeEye');
document.getElementById('closeEye').addEventListener('click', function () {

    const passValue = document.getElementById('Password');
    if (passValue.type = "text") {
        passValue.type = "password"
        closeElement.style.display = "none"
          element.style.display="inline"
    } else {
        passValue.type = "text";
        closeElement.style.display = "none"
      

    }

})