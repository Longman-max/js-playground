let calculation = "";

function calculate(value) {
  calculation += value;
  const inputElement = document.querySelector("input");
  inputElement.value = calculation;
}

let calculation2 = "";

function handleKeyDownEvents(event) {
  const inputElement = document.querySelector("input");
  if (
    event.key !== "Backspace" &&
    event.key !== "Enter" &&
    event.key !== "Shift"
  ) {
    calculation += event.key;
    console.log(calculation);
  } else if (event.key === "Enter") {
    console.log(`${eval(calculation)}`);
    inputElement.value = `${eval(calculation)}`;
    calculation = "";
  }
}
