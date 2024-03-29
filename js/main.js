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
let param1 = NaN;
let param2 = NaN;
let currOperand = NaN;

// RESET FUNCTIONS
function clearVals() {
    param1 = NaN;
    param2 = NaN;
    currOperand = NaN;
}

function clearAll() {
    clearVals();
    displayScreen.innerHTML = 0;
}

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

function opTotal() {
    param1 = parseFloat(param1);
    param2 = parseFloat(param2);

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
    param1 = displayScreen.innerHTML;
}

function updateScreen(paramToDisplay) {
    displayScreen.innerHTML = paramToDisplay;
}

// STORING BTN INPUT
function digitStore(value) {
    // if operator is NAN, assign or append the value to param1
    // else, assign or append the value to param2
    if (!currOperand) {
        if (!param1) {
            param1 = value;
        }
        else {
            param1 += value;
        }
        updateScreen(param1);
    } else {
        if (!param2) {
            param2 = value;
        }
        else {
            param2 += value;
        }
        updateScreen(param2);
    }
}

function opBackspace() {
    if (!currOperand) {
        param1 = displayScreen.innerHTML;
        if (param1) {
            param1 = param1.slice(0, -1);
            updateScreen(param1);
        }
    } else {
        param2 = displayScreen.innerHTML;
        if (param2) {
            param2 = param2.slice(0, -1);
            updateScreen(param2);
        }
    }
}

function operatorStore(value) {
    // if param2 has a value, perform operation
    if (param2) opTotal();
    currOperand = value;
}

// BIND FUNCTS TO BTNS
btnNum0.addEventListener("click", () => digitStore('0'));
btnNum1.addEventListener("click", () => digitStore('1'));
btnNum2.addEventListener("click", () => digitStore('2'));
btnNum3.addEventListener("click", () => digitStore('3'));
btnNum4.addEventListener("click", () => digitStore('4'));
btnNum5.addEventListener("click", () => digitStore('5'));
btnNum6.addEventListener("click", () => digitStore('6'));
btnNum7.addEventListener("click", () => digitStore('7'));
btnNum8.addEventListener("click", () => digitStore('8'));
btnNum9.addEventListener("click", () => digitStore('9'));
btnDecimal.addEventListener("click", () => digitStore('.'));

btnClear.addEventListener("click", () => clearAll());
btnBackspace.addEventListener("click", () => opBackspace());

btnMultiply.addEventListener("click", () => operatorStore('*'));
btnDivide.addEventListener("click", () => operatorStore('/'));
btnSubtract.addEventListener("click", () => operatorStore('-'));
btnSum.addEventListener("click", () => operatorStore('+'));
btnEqual.addEventListener("click", () => opTotal());

