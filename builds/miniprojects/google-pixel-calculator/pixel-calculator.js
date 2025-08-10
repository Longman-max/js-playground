let calculation = "";

function calculateSquareRoot() {
  const inputElement = document.querySelector("input");
  if (inputElement.value !== "") {
    calculation = `Math.sqrt(${inputElement.value})`;
    displayResult();
    calculation = "";
  }
}

function calculate(value) {
  removeError();
  if (value === "sqrt") {
    calculateSquareRoot();
  } else {
    calculation += value;
    const inputElement = document.querySelector("input");
    inputElement.value = calculation;
  }
}

function clearScreen() {
  removeError();
  const inputElement = document.querySelector("input");
  inputElement.value = 0;
  calculation = "";
}

function displayResult() {
  const inputElement = document.querySelector("input");
  inputElement.value = `${eval(calculation)}`;
  if (inputElement.value === "undefined") {
    if (
      !inputElement.classList.contains(
        "error-message" && inputElement.value === undefined
      )
    ) {
      inputElement.classList.add("error-message");
      inputElement.value = "Syntax Error";
    } else {
      inputElement.classList.remove("error-message");
    }
  }
}

let count = 0;
function handleBrackets(value) {
  const inputElement = document.querySelector("input");
  if (inputElement.value === "") {
    count = 0;
  } else {
    count += 1;
    if (count % 2 !== 0) {
      value = "(";
    } else {
      value = ")";
    }
  }
  return value;
}

function deleteLastCharacter() {
  let inputElement = document.querySelector("input");
  if (inputElement.value === "") {
    inputElement.value = "";
  } else {
    //Get the current value of the input
    let currrentValue = inputElement.value;

    //Check if the input element is not empty
    if (currrentValue.length > 0) {
      //remove the last character from the input element
      let newValue = currrentValue.slice(0, -1);

      //set the updateed value back to the input
      inputElement.value = newValue;
    }
  }

  // if (inputElement.value === "") {
  //   inputElement.value = "";
  // }
}

function removeError() {
  const error = document.querySelector(".error-message");
  if (error) {
    error.classList.remove("error-message");
  }
}
