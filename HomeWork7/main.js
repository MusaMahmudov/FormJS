let usernameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmpasswordInput = document.getElementById("confirmpassword");
let errorRequired = document.getElementsByClassName("error")[0];
let btn = document.getElementById("submit");
let form = document.getElementsByTagName("form")[0];

function CheckReq(e, input) {
  e.preventDefault();
  let CurrentElem = input.parentElement;
  let currentError = CurrentElem.getElementsByClassName("error")[0];
  if (input.value === "") {
    currentError.innerText = "this field is empty";
  } else {
    currentError.innerText = "";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault;
  let nameValid = false;
  let emailValid = false;
  let passwordValid = false;
  let confpasswordValid = false;

  let CurrentElem = usernameInput.parentElement;
  let currentError = CurrentElem.getElementsByClassName("error")[0];

  if (usernameInput.value.length >= 3 && usernameInput.value.length <= 15) {
    usernameInput.style.border = "1px solid green";
    currentError.innerText = "";

    nameValid = true;
  } else {
    usernameInput.style.border = "1px solid red";
    currentError.innerText = "has to be between 3-15";
  }
  CheckReq(e, usernameInput);

  CurrentElem = emailInput.parentElement;
  currentError = CurrentElem.getElementsByClassName("error")[0];

  let pattern = /^\S+@\S+\.\S+$/;
  let res = pattern.test(emailInput.value);
  if (res) {
    emailValid = true;
    emailInput.style.border = "1px solid green";
    currentError.innerText = "";
  } else {
    emailInput.style.border = "1px solid red";
    currentError.innerText = "incorrect format ";
  }
  CheckReq(e, emailInput);

  CurrentElem = passwordInput.parentElement;
  currentError = CurrentElem.getElementsByClassName("error")[0];

  if (passwordInput.value.length > 6) {
    passwordValid = true;
    passwordInput.style.border = "1px solid green";
    currentError.innerText = "";
  } else {
    passwordInput.style.border = "1px solid red";
    currentError.innerText = "too short password";
  }
  CheckReq(e, passwordInput);

  CurrentElem = confirmpasswordInput.parentElement;
  currentError = CurrentElem.getElementsByClassName("error")[0];

  if (passwordValid) {
    if (passwordInput.value === confirmpasswordInput.value) {
      confirmpasswordInput.style.border = "1px solid green";
      confpasswordValid = true;
      currentError.innerText = "";
    }
  } else {
    currentError.innerText = "too short password";
    confirmpasswordInput.style.border = "1px solid red";
  }
  CheckReq(e, confirmpasswordInput);

  if (nameValid && emailValid && passwordValid && confpasswordValid) {
    alert("succesc");
    form.reset();
  }
});
