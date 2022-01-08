let equationField;
let entryField;
let calcTotal = 0;
let currentEntry = "";
let entryHistory = "";

function bindNumberOnClicks() {
  let numberbutton = document.querySelectorAll(".number-button");
  numberbutton.forEach(bindNumberOnClick);
}
function bindNumberOnClick(button) {
  button.onclick = numberOnClick;
}
function numberOnClick(event) {
  console.log(event.target.dataset.value);
  currentEntry = currentEntry + event.target.dataset.value;
  entryField.innerHTML = currentEntry;
}
function bindOperatorOnClicks() {
  let operatorbutton = document.querySelectorAll(".operator-button");
  operatorbutton.forEach(bindOperatorOnClick);
}
function bindOperatorOnClick(button) {
  button.onclick = operatorOnClick;
}
function operatorOnClick(event) {
  console.log(event.target.dataset.value);
  let op = event.target.dataset.value;
  let enteredNumber = parseFloat(currentEntry);
  if (op === "+") {
    calcTotal = calcTotal + enteredNumber;
  } else if (op === "-") {
    calcTotal = calcTotal - enteredNumber;
  } else if (op === "*") {
    calcTotal = calcTotal * enteredNumber;
  } else if (op === "/") {
    calcTotal = calcTotal / enteredNumber;
  } else if (op === "=") {
  }
  entryHistory = entryHistory + op + currentEntry;
  equationField.innerHTML = entryHistory;
  currentEntry = " ";
  entryField.innerHTML = currentEntry;

  console.log(calcTotal);
}

window.onload = function () {
  equationField = document.querySelector("#equation");
  entryField = document.querySelector("#number-input");
  bindNumberOnClicks();
  bindOperatorOnClicks();
};
