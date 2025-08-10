// Store and the set the password in a local storage
function setPassword() {
  const setPasswordInput = document.querySelector(".set-password-input");
  if (setPasswordInput.value.trim() !== "") {
    localStorage.setItem("password", setPasswordInput.value);
    password = localStorage.getItem("password");
  }
  setPasswordInput.value = "";
}

//Get the password and store it in a variable
let password = localStorage.getItem("password");
const passwordInputElement = document.querySelector(".password-input");

// Check user input if correct or not
// And created a varible to store number of attempts
let attempts = 6;
function verifyPassword() {
  const userInput = document.querySelector(".password-input");
  const verificationStatus = document.querySelector(".display-login-status");
  const loginButton = document.querySelector(".login-button");

  if (userInput.value.trim() !== "") {
    if (userInput.value === password) {
      loginButton.classList.remove("invalid-button");
      loginButton.classList.add("valid-button");
      if (!verificationStatus.classList.contains("valid")) {
        verificationStatus.classList.remove("invaild");
        verificationStatus.classList.add("valid");
        verificationStatus.innerHTML = "You have been logged in!";
      }
    } else if (userInput.value !== password) {
      loginButton.classList.remove("valid-button");
      loginButton.classList.add("invalid-button");
      attempts--;
      verificationStatus.classList.remove("valid");
      verificationStatus.classList.add("invaild");
      if (attempts === 0) {
        verificationStatus.innerHTML = "You have 0 attempts left!";
      } else if (attempts > 0) {
        verificationStatus.innerHTML = `${attempts} attempts left!`;
      }
    }
  }

  userInput.value = "";
}

// These functions handle events
function handleKeyDownEventsInitial(event) {
  if (event.key === "Enter") {
    setPassword();
  }
  return event;
}

function handleKeyDownEventsUser(event) {
  if (event.key === "Enter") {
    verifyPassword();
  }
  return event;
}
