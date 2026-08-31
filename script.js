function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
}

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
let currentInput = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    display.textContent = "0";
});

const operatorButton = document.querySelectorAll(".operator");

let firstNumber = null;
let operatorSelected = null;

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
       if (firstNumber !== null && operatorSelected !== null && currentInput !== "") {
        let result = operate(operatorSelected, firstNumber, Number(currentInput));
        display.textContent = result;
        firstNumber = result;

        } else if (firstNumber === null) {
            firstNumber = Number(currentInput);
        }

        operatorSelected = button.textContent;
        currentInput = "";
    });
});
