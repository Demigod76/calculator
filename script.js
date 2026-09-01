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
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
let firstNumber = null;
let operatorSelected = null;
let currentInput = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    operatorSelected = null;
    display.textContent = "0";
    decimalButton.disabled = false;
});

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
       if (firstNumber !== null && operatorSelected !== null && currentInput !== "") {
        let result = safeOperate(operatorSelected, firstNumber, Number(currentInput));
        display.textContent = result;
        firstNumber = result;
        decimalButton.disabled = false;

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
        decimalButton.disabled = false;
    });
});

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
    decimalButton.disabled = false;
})

function safeOperate(operator, a, b) {
    if (operator === "/" && b === 0) {
        return "Nice try, but you can't divide by zero!";
    }
    return operate(operator, a, b); 
}



decimalButton.addEventListener("click", () => {
        currentInput += ".";
        display.textContent = currentInput;
        decimalButton.disabled = true;
});