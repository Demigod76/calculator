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
    display.textContent = "0";
});