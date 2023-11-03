const body = document.querySelector("body")
const div = document.createElement("div")
div.classList.add("container")
body.appendChild(div)

const calculatorDiv = document.createElement("div")
calculatorDiv.classList.add("calculator-div")
div.appendChild(calculatorDiv)

const displayDiv = document.createElement("div")
displayDiv.classList.add("display-div")
calculatorDiv.appendChild(displayDiv)

const display = document.createElement("div")
display.classList.add("display")
displayDiv.appendChild(display)





function add(num1,num2){
    console.log(num1 + num2)
}

function subtract(num1,num2){
    console.log(num1 - num2)
}

function multiply(num1,num2){
    console.log(num1 * num2)
}

function divide(num1,num2){
    console.log(num1 /num2)
}

function operate(num1,sign,num2){
let firstNum = num1;
let operator = sign;
let secondNum = num2;

    if(operator == "+"){
        add(num1,num2)
    }else if(operator == "-"){
        subtract(num1,num2)
    }else if(operator == "*"){
        multiply(num1,num2)
    }else{
        divide(num1,num2)
    }
    console.log(operator)
    console.log(secondNum)
}

operate(2,"+",3)

