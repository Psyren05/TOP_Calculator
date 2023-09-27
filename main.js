let firstNumber = 4;
let secondNumber = 8;
let currentOperator;
let result;

const displayWindow = document.getElementById('display-window');

const addBtn = document.getElementById('add-btn');
const addBtnClicked = addBtn.addEventListener('click', () => {
    currentOperator = '+';
});

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function operate(firstNumber, secondNumber) {
    // if add button is pressed, call the add() function and return add(firstNumber, secondNumber)
    if (currentOperator === '+') {
        result = add(firstNumber, secondNumber);
        // update the display window
        displayWindow.innerText === result;
        return result
    }
}