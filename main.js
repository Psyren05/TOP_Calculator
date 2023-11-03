let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = '';
let displayNumber = '';

const displayWindow = document.getElementById('display-window');

document.getElementById('0').addEventListener('click', () => {
    appendNumbers('0');
});
document.getElementById('1').addEventListener('click', () => {
    appendNumbers('1');
});
document.getElementById('2').addEventListener('click', () => {
    appendNumbers('2');
});
document.getElementById('3').addEventListener('click', () => {
    appendNumbers('3');
});
document.getElementById('4').addEventListener('click', () => {
    appendNumbers('4');
});
document.getElementById('5').addEventListener('click', () => {
    appendNumbers('5');
});
document.getElementById('6').addEventListener('click', () => {
    appendNumbers('6');
});
document.getElementById('7').addEventListener('click', () => {
    appendNumbers('7');
});
document.getElementById('8').addEventListener('click', () => {
    appendNumbers('8');
});
document.getElementById('9').addEventListener('click', () => {
    appendNumbers('9');
});

document.getElementById('add-btn').addEventListener('click', () => {
    handleOperator('+');
});
document.getElementById('subtract-btn').addEventListener('click', () => {
    handleOperator('-');
});
document.getElementById('multiply-btn').addEventListener('click', () => {
    handleOperator('x'); 
});
document.getElementById('divide-btn').addEventListener('click', () => {
    handleOperator('/');
});
document.getElementById('equals-btn').addEventListener('click', () => {
    pressEquals();
});

document.getElementById('decimal-btn').addEventListener('click', () => {
    appendDecimal();
})

document.getElementById('clear-btn').addEventListener('click', () => {
    clearBtn();
})

function operate(firstNumber, secondNumber, currentOperator) {

    if (currentOperator === '+') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber)
    } else if (currentOperator === '-') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber)
    } else if (currentOperator === 'x') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber)
    } else if (currentOperator === '/') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber)
    }
    return result
}

function appendNumbers(number) {

    if (displayNumber === '0') {
        firstNumber = '';
    } else {
        displayNumber += number;

        updateDisplay(displayNumber)
    }
}

function appendDecimal() {
    if(!displayNumber.includes('.')) { // if the display number does not include . then append decimal
        displayNumber += '.';
    } else if (displayNumber === '') {
        displayNumber += '0.';
    }
    updateDisplay(displayNumber);
}

function updateDisplay(value) {
    displayWindow.innerText = value;
}

function clearBtn() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    displayNumber = '';
    displayWindow.innerText = '0'; 
}

function handleOperator(operator) {
    if (currentOperator === '') {       // This code first checks if currentOperator is empty. If it is, it means this is the first operator pressed, and it sets firstNumber and currentOperator as expected. If an operator has already been pressed, it sets secondNumber and resets displayNumber for the next input.
        firstNumber = displayNumber;
        currentOperator = operator;
        displayNumber = '';
    } else {
        secondNumber = displayNumber;
        displayNumber = '';
    }
}

function pressEquals() {
    result = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
    displayWindow.innerText = result;
  }
