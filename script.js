let firstNum = 0;
let secondNum = 0;
let operator = '';


function operate(num1,num2,op) {
    switch (op){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

console.log(operate(10,5,'/'));