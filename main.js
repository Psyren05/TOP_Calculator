let firstNumber;
let secondNumber;
let currentOperator;
let result;

const displayWindow = document.getElementById('display-window');

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

const addBtnClicked = addBtn.addEventListener('click', () => {
    currentOperator = '+';
});
const subtractBtnClicked = subtractBtn.addEventListener('click', () => {
    currentOperator = '-';
});
const multiplyBtnClicked = multiplyBtn.addEventListener('click', () => {
    currentOperator = 'X';
});
const divideBtnClicked = divideBtn.addEventListener('click', () => {
    currentOperator = '/';
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

function operate(firstNumber, secondNumber, currentOperator) {
    // if add button is pressed, call the add() function and return add(firstNumber, secondNumber)
    if (currentOperator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (currentOperator === '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (currentOperator === 'X') {
        result = multiply(firstNumber, secondNumber);
    } else if (currentOperator === '/') {
        result = divide(firstNumber, secondNumber);

        displayWindow.innerText = result;
    }   return result
}
// Create the functions that populate the display when you click 
// the number buttons. You should be storing the ‘display value’ in 
// a variable somewhere for use in the next step.

function populateDisplay {
    
}