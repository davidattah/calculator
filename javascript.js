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
display.textContent = "23984y48"
displayDiv.appendChild(display)

const buttonsDiv = document.createElement("div")
buttonsDiv.classList.add("buttons-div")
calculatorDiv.appendChild(buttonsDiv)

const buttonSeven = document.createElement("div")
buttonSeven.classList.add("button-seven")
buttonSeven.textContent = "7"
buttonsDiv.appendChild(buttonSeven)


const buttonEight = document.createElement("div")
buttonEight.classList.add("button-eight")
buttonEight.textContent = "8"
buttonsDiv.appendChild(buttonEight)

const buttonNine = document.createElement("div")
buttonNine.classList.add("button-nine")
buttonNine.textContent = "9"
buttonsDiv.appendChild(buttonNine)

const buttonFour = document.createElement("div")
buttonFour.classList.add("button-four")
buttonFour.textContent = "4"
buttonsDiv.appendChild(buttonFour)

const buttonFive = document.createElement("div")
buttonFive.classList.add("button-five")
buttonFive.textContent = "5"
buttonsDiv.appendChild(buttonFive)

const buttonSix = document.createElement("div")
buttonSix.classList.add("button-six")
buttonSix.textContent = "6"
buttonsDiv.appendChild(buttonSix)

const buttonOne = document.createElement("div")
buttonOne.classList.add("button-one")
buttonOne.textContent = "1"
buttonsDiv.appendChild(buttonOne)

const buttonTwo = document.createElement("div")
buttonTwo.classList.add("button-two")
buttonTwo.textContent = "2"
buttonsDiv.appendChild(buttonTwo)

const buttonThree = document.createElement("div")
buttonThree.classList.add("button-three")
buttonThree.textContent = "3"
buttonsDiv.appendChild(buttonThree)



const equalButton = document.createElement("div")
equalButton.classList.add("equal-button")
equalButton.textContent = "="
buttonsDiv.appendChild(equalButton)

const clearButton = document.createElement("div")
clearButton.classList.add("clear-button")
clearButton.textContent = "CLEAR"
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

