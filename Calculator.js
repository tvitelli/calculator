let equationField;
let entryField;
let calcTotal = 0;
let currentEntry = "";
let entryHistory = "";
let lastOP;

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
  let newOP = event.target.dataset.value;
  let enteredNumber = parseFloat(currentEntry);
  if (lastOP === "+") {
    calcTotal = calcTotal + enteredNumber;
  } else if (lastOP === "-") {
    calcTotal = calcTotal - enteredNumber;
  } else if (lastOP === "*") {
    calcTotal = calcTotal * enteredNumber;
  } else if (lastOP === "/") {
    calcTotal = calcTotal / enteredNumber;
  } else {
    calcTotal = enteredNumber;
  }
  if (newOP === "=") {
    entryHistory = entryHistory + currentEntry + newOP + calcTotal;
    equationField.innerHTML = entryHistory;
    currentEntry = calcTotal;
    entryField.innerHTML = currentEntry;
  } else {
    entryHistory = entryHistory + currentEntry + newOP;
    equationField.innerHTML = entryHistory;
    currentEntry = "0";
    entryField.innerHTML = currentEntry;
  }
  lastOP = newOP;

  console.log(calcTotal);
}

window.onload = function () {
  equationField = document.querySelector("#equation");
  entryField = document.querySelector("#number-input");
  bindNumberOnClicks();
  bindOperatorOnClicks();
};
