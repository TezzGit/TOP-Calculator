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

const maxDisplayLength = 12;

// Calc Values
let param1 = NaN;
let param2 = NaN;
let currOperand = NaN;
let decimalUsed = false;
let lastResult = 0;

// RESET FUNCTIONS
function clearVals() {
    param1 = NaN;
    param2 = NaN;
    currOperand = NaN;
    decimalUsed = false;
}

function clearAll() {
    clearVals();
    displayScreen.innerHTML = 0;
    lastResult = 0;
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
    if (firstVal === 0 || secondVal === 0) return "ERR0R";
    return firstVal / secondVal;
}

function opTotal() {
    if (!param1) param1 = lastResult;
    param2 = displayScreen.innerHTML;

    param1 = parseFloat(param1);
    param2 = parseFloat(param2);

    switch (currOperand) {
        case '*':
            lastResult = opMultiply(param1, param2);
            break;
        case '/':
            lastResult = opDivide(param1, param2);
            break;
        case '+':
            lastResult = opAdd(param1, param2);
            break;
        case '-':
            lastResult = opSubtract(param1, param2);
            break;
    }
    updateScreen(lastResult);
    clearVals();
}

function updateScreen(paramToDisplay) {
    const display = paramToDisplay.toString()
    if (display.length > maxDisplayLength) {
        displayScreen.innerHTML = "ERR - TOO LARGE"
    } else {
        displayScreen.innerHTML = display;
    }

}

// STORING BTN INPUT
function digitStore(value) {
    // if operator is NAN, assign or append the value to param1
    // else, assign or append the value to param2
    if (value === '.') {
        if (decimalUsed === true) return;
        decimalUsed = true;
    }

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
    if (!displayScreen.innerHTML.includes(".")) decimalUsed = false;
}

function operatorStore(value) {
    // if param2 has a value, perform operation
    if (!param1) {
        if (parseFloat(lastResult)) {
            param1 = lastResult;
        } else param1 = 0;
    }

    if (param2) opTotal();
    currOperand = value;
    decimalUsed = false;
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

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "1":
            digitStore('1');
            break;
        case "2":
            digitStore('2');
            break;
        case "3":
            digitStore('3');
            break;
        case "4":
            digitStore('4');
            break;
        case "5":
            digitStore('5');
            break;
        case "6":
            digitStore('6');
            break;
        case "7":
            digitStore('7');
            break;
        case "8":
            digitStore('8');
            break;
        case "9":
            digitStore('9');
            break;
        case "0":
            digitStore('0');
            break;
        case "*":
            operatorStore('*');
            break;
        case "/":
            operatorStore('/');
            break;
        case "+":
            operatorStore('+');
            break;
        case "-":
            operatorStore('-');
            break;
        case "=":
            opTotal();
            break;
        case ".":
            digitStore('.');
            break;
    }
})

