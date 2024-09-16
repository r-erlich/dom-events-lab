const buttons = document.querySelectorAll(".button");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const addition = document.querySelector("#addition");
const equals = document.querySelector("#equals");
const subtraction = document.querySelector("#subtraction");
const division = document.querySelector("#division");
const multiply = document.querySelector("#multiply");

let currentNumber = "";
let operator = "";
let pendingValue = "";

function updateDisplay(value) {
  display.innerText = value;
}

function listNumber(value) {
  currentNumber = currentNumber + value;
  updateDisplay(currentNumber);
}

function listOperator(value) {
  if (currentNumber === "") {
    return;
  } else if (pendingValue !== "") {
    calculate();
  }
  operator = value;
  pendingValue = currentNumber;
  currentNumber = "";
}

function calculate() {
  let result = 0;
  if (operator === "+") {
    result = Number(pendingValue) + Number(currentNumber); //converting a str into a num
  } else if (operator === "-") {
    result = Number(pendingValue) - Number(currentNumber);
  } else if (operator === "/") {
    result = Number(pendingValue) / Number(currentNumber);
  } else if (operator === "*") {
    result = Number(pendingValue) * Number(currentNumber);
  }
  currentNumber = result.toString();
  operator = "";
  pendingValue = "";
  updateDisplay(currentNumber);
}

function clear(clear) {
  currentNumber = "";
  pendingValue = "";
  operator = "";
  if (display.innerText === "C") {
    clear = "";
  }
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    const value = target.innerText;
    if (target.classList.contains("number")) {
      listNumber(value);
    } else if (target.classList.contains("operator")) {
      listOperator(value);
    } else if (target.classList.contains("equals")) {
      calculate();
    } else if (target && value === "C") {
      clear();
    }
  });
});
