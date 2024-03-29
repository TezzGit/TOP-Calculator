// Numpad Digits
const btnNum1 = document.getElementById('np-1');
const btnNum2 = document.getElementById('np-2');
const btnNum3 = document.getElementById('np-3');
const btnNum4 = document.getElementById('np-4');
const btnNum5 = document.getElementById('np-5');
const btnNum6 = document.getElementById('np-6');
const btnNum7 = document.getElementById('np-7');
const btnNum8 = document.getElementById('np-8');
const btnNum9 = document.getElementById('np-9');
const btnNum0 = document.getElementById('np-0');
const btnDecimal = document.getElementById('np-decimal')

// Operator Buttons
const btnMultiply = document.getElementById('multiply');
const btnDivide = document.getElementById('divide');
const btnSum = document.getElementById('sum');
const btnSubtract = document.getElementById('subtract');
const btnEqual = document.getElementById('equal');

// Function Buttons
const btnPercent = document.getElementById('np-percent');
const btnPlusMinus = document.getElementById('np-plus-minus')
const btnBackspace = document.getElementById('bksp');
const btnClear = document.getElementById('clear');

// Screen Var
const displayScreen = document.getElementById('output');

// Calc Values
const param1 = NaN;
const param2 = NaN;
const currOperand = NaN;

// BASE OPERATIONS
function opAdd(firstVal, secondVal) {
    return firstVal + secondVal;
}

function opSubtract(firstVal, secondVal) {
    return firstVal - secondVal;
}

function opMultiply(firstVal, secondVal) {
    return firstVal * secondVal;
}

function opDivide(firstVal, secondVal) {
    if (firstVal === 0 || secondVal === 0) return 0;
    return firstVal / secondVal;
}

function clearVals() {
    param1 = param2 = currOperand = NaN;
}

function opTotal() {
    if (param1 === NaN) param1 = displayScreen.innerHTML;
    if (param2 === NaN) param2 = 0;

    switch (currOperand) {
        case '*':
            displayScreen.innerHTML = opMultiply(param1, param2);
            break;
        case '/':
            displayScreen.innerHTML = opDivide(param1, param2);
            break;
        case '+':
            displayScreen.innerHTML = opAdd(param1, param2);
            break;
        case '-':
            displayScreen.innerHTML = opSubtract(param1, param2);
            break;
    }
    clearVals();
}

// STORING BTN INPUT
function digitStore(value) {
    // if operator is NAN, assign or append the value to param1
    // else, assign or append the value to param2
    if (currOperand === NaN) {
        if (param1 === NaN) param1 = value; else param1 += value;
    } else {
        if (param2 === NaN) param2 = value; else param2 += value;
    }
}

function operatorStore(value) {
    // if param2 has a value, perform operation
    if (param2) opTotal();
    currOperand = value;
}