let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result;
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
    console.log(firstNumber, currentOperator, secondNumber)
});
document.getElementById('subtract-btn').addEventListener('click', () => {
    currentOperator = '-';
});
document.getElementById('multiply-btn').addEventListener('click', () => {
    currentOperator = 'x'; 
});
document.getElementById('divide-btn').addEventListener('click', () => {
    currentOperator = '/';
});
document.getElementById('equals-btn').addEventListener('click', () => {
    pressEquals();
});

document.getElementById('decimal-btn').addEventListener('click', () => {
    appendDecimal();
})

document.getElementById('clear-btn').addEventListener('click', () => {
    clearDisplay();
})

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
    } else if (currentOperator === 'x') {
        result = multiply(firstNumber, secondNumber);
    } else if (currentOperator === '/') {
        result = divide(firstNumber, secondNumber);

        displayWindow.innerText = result;
    }   return result
}
// Create the functions that populate the display when you click 
// the number buttons. You should be storing the ‘display value’ in 
// a variable somewhere for use in the next step.

function appendNumbers(number) {

    if (displayNumber === '0') {
        displayWindow.innerText = '0';
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

function clearDisplay() {
    displayWindow.innerText = '0';
    displayNumber = '';
}

// click first number
// store first number
// click operator

// click second number 
// store second number
// click equals
// call operate function 

function handleOperator(operator) {
    firstNumber = displayNumber;
    currentOperator = operator;
    displayNumber = ''; // clears display to prepare for secondNumber
    secondNumber = displayNumber; // this does not work - need to save secondNumber
}

// firstNumber = displayNumber
// currentOperator = operator
// secondNumber = displayNumber
// pressEqual as a seperate function or in the handleOperator function?
// operate(firstNumber, secondNumber, currentOperator)

function pressEquals(firstNumber, secondNumber, currentOperator) {
    result = operate(firstNumber, secondNumber, currentOperator);
    displayWindow.innerText = result;
  }
