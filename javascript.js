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

const buttonsDiv = document.createElement("div")
buttonsDiv.classList.add("buttons-div")
calculatorDiv.appendChild(buttonsDiv)

const buttonSeven = document.createElement("div")
buttonSeven.classList.add("button-seven")
buttonsDiv.appendChild(buttonSeven)

const buttonEight = document.createElement("div")
buttonEight.classList.add("button-eight")
buttonsDiv.appendChild(buttonEight)

const buttonNine = document.createElement("div")
buttonNine.classList.add("button-nine")
buttonsDiv.appendChild(buttonNine)

const buttonFour = document.createElement("div")
buttonFour.classList.add("button-four")
buttonsDiv.appendChild(buttonFour)

const buttonFive = document.createElement("div")
buttonFive.classList.add("button-five")
buttonsDiv.appendChild(buttonFive)

const buttonSix = document.createElement("div")
buttonSix.classList.add("button-six")
buttonsDiv.appendChild(buttonSix)

const buttonThree = document.createElement("div")
buttonThree.classList.add("button-three")
buttonsDiv.appendChild(buttonThree)

const buttonTwo = document.createElement("div")
buttonTwo.classList.add("button-two")
buttonsDiv.appendChild(buttonTwo)

const buttonOne = document.createElement("div")
buttonOne.classList.add("button-one")
buttonsDiv.appendChild(buttonOne)

const equalButton = document.createElement("div")
equalButton.classList.add("equal-button")
buttonsDiv.appendChild(equalButton)

const clearButton = document.createElement("div")
clearButton.classList.add("clear-button")
buttonsDiv.appendChild(clearButton)

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

