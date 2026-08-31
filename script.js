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
    operatorSelected = null;
    display.textContent = "0";
});

const operatorButton = document.querySelectorAll(".operator");

let firstNumber = null;
let operatorSelected = null;

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
       if (firstNumber !== null && operatorSelected !== null && currentInput !== "") {
        let result = safeOperate(operatorSelected, firstNumber, Number(currentInput));
        display.textContent = result;
        firstNumber = result;

        if (result === "Nice try, but you can't divide by zero!") {
            firstNumber = null;
            operatorSelected = null;
            currentInput = "";
            return;
        } else {
            firstNumber = result;
        }
        }
        else if (firstNumber === null) {
            firstNumber = Number(currentInput);
        }
    
        operatorSelected = button.textContent;
        currentInput = "";
    });
});

const equalButton = document.querySelector(".equals");

equalButton.addEventListener("click", () =>{
    let finalResult = safeOperate(operatorSelected, firstNumber, Number(currentInput));

    if (finalResult === "Nice try, but you can't divide by zero!") {
        display.textContent = finalResult;
        firstNumber = null;
        operatorSelected = null;
        currentInput = "";
        return;
    }

    else {
    display.textContent = finalResult;
    }

    firstNumber = finalResult;
    currentInput = "";
})

function safeOperate(operator, a, b) {
    if (operator === "/" && b === 0) {
        return "Nice try, but you can't divide by zero!";
    }
    return operate(operator, a, b); 
}