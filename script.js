let firstNum = '';
let secondNum = '';
let tempNum = '0';
let operator = '';
let operationString = '';
let result = '';
let typeSecondNum = false;
let recentOperation = false;
let canEquals = false;

const buttonContainer = document.querySelector('#button-container');

const currentEntry = document.querySelector('#current-entry');
const previousEntry = document.querySelector('#previous-entry');

buttonContainer.addEventListener('click', (e) => {
    const input = e.target;

    if (checkOperationValues()) {
        canEquals = true;
    } else {
        canEquals = false;
    }

    if (input.classList.contains('number')){
        inputNumber(input);
        recentOperation = false;
    } else if (input.id === 'polarity' && tempNum !== '0' && !recentOperation){
        reversePolarity(tempNum);
    } else if (input.classList.contains('operator') && firstNum !== '') {
        if (checkOperationValues()) {
            if (recentOperation === false){
                operate(firstNum, secondNum, operator);
            }
            
            firstNum = result;
            secondNum = '';
            tempNum = '0';   
            operator = input.textContent;   
        } else {
            operator = input.textContent;
            typeSecondNum = true;
            tempNum = '0';
        }
    } else if (input.id === 'equals' && checkOperationValues()) {
        operate(firstNum, secondNum, operator);
        // firstNum = result;
        // secondNum = '';
        // tempNum = '0';     
    } else if (input.id === 'all-clear') {
        allClear();
    }
});

function inputNumber(input){

    let newNum = input.textContent;
    let currentNum = currentEntry.textContent;

    if (input.id === 'polarity' && currentNum !== '0') {
        reversePolarity(tempNum);
    } else if (tempNum === '0') {
        if (input.id === 'point') {
            tempNum += newNum;
        } else {
            tempNum = newNum;
        }       
    } else {
        if (tempNum.length < 14){
            if (input.id === 'point' && !tempNum.includes('.')){  
                tempNum += newNum; 
            } else if (input.id !== 'point'){
                tempNum += newNum;
            }
        }
    }
    currentEntry.textContent = tempNum;
    updateNums(tempNum);
}

function updateNums(num) {
    if (typeSecondNum) {
        secondNum = tempNum;
    } else {
        firstNum = tempNum;
    }
}

function allClear() {
    firstNum = '';
    secondNum = '';
    tempNum = '0';
    operator = '';
    operationString = '';
    result = '';
    typeSecondNum = false;
    recentEquals = false;
    currentEntry.textContent = '0';
    previousEntry.textContent = '';
}

function reversePolarity(num) {
    const flippedNum = Number.parseFloat(num) * -1;
    tempNum = flippedNum;
    updateNums(tempNum);
    currentEntry.textContent = tempNum;
}

function checkOperationValues() {
    if (firstNum !== '' && secondNum !== '' && operator !== '')
        return true;
}

function operate(num1, num2, op) {
    operationString = `${num1} ${op} ${num2}`;
    previousEntry.textContent = operationString;

    num1 = Number.parseFloat(num1);
    num2 = Number.parseFloat(num2);
    switch (op){
        case '+':
            result = String(add(num1, num2));
            break;
        case '-':
            result = String(subtract(num1,num2));
            break;
        case 'x':
            result = String(multiply(num1,num2));
            break;
        case '/':
            if (num2 === 0){
                allClear();
                currentEntry.textContent = 'Invalid Entry';
                return;
            }
            result = String(divide(num1,num2));
            break;
        case '=':

            break;
    }

    currentEntry.textContent = result;  
    firstNum = result;  
    recentOperation = true;
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

// buttonContainer.addEventListener('click', (e) => {
//     const input = e.target;
//     if (input.classList.contains('number')) {
//         if (recentEquals) {
//             resetAll();
//         }
//         inputNumber(input);
//     } else if (input.classList.contains('operator') && input.id !== 'equals') {
//         if (recentEquals) {
//             recentEquals = false;
//             firstNum = currentEntry.textContent;
//             typeSecondNum = true;
//             operator = '';
//             inputOperator(input);
//         } else {
//             inputOperator(input);
//         }
//     } else if (input.id === 'equals') {
//         inputOperator(input);
//     } else if (input.id === 'backspace') {
//         backspace();
//     } else if (input.id === 'all-clear'){
//         previousEntry.textContent = '';
//         currentEntry.textContent = '0';
//         allClear();
//     } else if (input.id === 'percent'){
//         percent();
//     }
    
// });



// function resetAll() {
//     firstNum = '';
//     secondNum = '';
//     tempNum = '0';
//     operator = '';
//     operationString = '';
//     result = '';
//     typeSecondNum = false;
//     recentEquals = false;
//     previousEntry.textContent = '';
// }

// function inputNumber(input){

//     let newNum = input.textContent;

//     if (input.id === 'polarity' && currentNum !== '0') {
//         reversePolarity(tempNum);
//     } else if (tempNum === '0') {
//         if (input.id === 'point') {
//             tempNum += newNum;
//         } else {
//             tempNum = newNum;
//         }       
//     } else {
//         if (tempNum.length < 14){
//             if (input.id === 'point' && !tempNum.includes('.')){  
//                 tempNum += newNum; 
//             } else if (input.id !== 'point'){
//                 tempNum += newNum;
//             }
//         }
//     }
//     currentEntry.textContent = tempNum;
//     updateNums(tempNum);
// }



// function inputOperator(input) {
//     let result;

//     if (checkOperationValues() && input.id === 'equals') {
//         result = operate(firstNum, secondNum, operator);
//         currentEntry.textContent = result;
//         firstNum = result;
//         typeSecondNum = false;
//         recentEquals = true;
//     } else if (checkOperationValues() && input.id !== 'equals') {
//         result = operate(firstNum, secondNum, operator);
//         currentEntry.textContent = result;
//         firstNum = result;
//         secondNum = '';
//         typeSecondNum = true;
//     } else {
//         updateNums(currentEntry.textContent);
//         operator = input.textContent;
//         typeSecondNum = true;
//         tempNum = '0';
//     }

  
// }




