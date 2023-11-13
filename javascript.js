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
buttonSeven.classList.add("number-button")
buttonSeven.setAttribute("id", "seven")
buttonSeven.textContent = "7"
buttonsDiv.appendChild(buttonSeven)


const buttonEight = document.createElement("button")
buttonEight.classList.add("number-button")
buttonEight.setAttribute("id", "eight")
buttonEight.textContent = "8"
buttonsDiv.appendChild(buttonEight)

const buttonNine = document.createElement("button")
buttonNine.classList.add("number-button")
buttonNine.setAttribute("id", "nine")
buttonNine.textContent = "9"
buttonsDiv.appendChild(buttonNine)

const divideButton = document.createElement("button")
divideButton.classList.add("operator")
divideButton.setAttribute("id", "divide")
divideButton.textContent = "/"
buttonsDiv.appendChild(divideButton)

const buttonFour = document.createElement("button")
buttonFour.classList.add("number-button")
buttonFour.setAttribute("id", "four")
buttonFour.textContent = "4"
buttonsDiv.appendChild(buttonFour)

const buttonFive = document.createElement("button")
buttonFive.classList.add("number-button")
buttonFive.setAttribute("id", "five")
buttonFive.textContent = "5"
buttonsDiv.appendChild(buttonFive)

const buttonSix = document.createElement("button")
buttonSix.classList.add("number-button")
buttonSix.setAttribute("id", "six")
buttonSix.textContent = "6"
buttonsDiv.appendChild(buttonSix)

const subtractButton = document.createElement("button")
subtractButton.classList.add("operator")
subtractButton.setAttribute("id", "subtract")
subtractButton.textContent = "-"
buttonsDiv.appendChild(subtractButton)

const buttonOne = document.createElement("button")
buttonOne.classList.add("number-button")
buttonOne.setAttribute("id", "one")
buttonOne.textContent = "1"
buttonsDiv.appendChild(buttonOne)

const buttonTwo = document.createElement("button")
buttonTwo.classList.add("number-button")
buttonTwo.setAttribute("id", "two")
buttonTwo.textContent = "2"
buttonsDiv.appendChild(buttonTwo)

const buttonThree = document.createElement("button")
buttonThree.classList.add("number-button")
buttonThree.setAttribute("id", "three")
buttonThree.textContent = "3"
buttonsDiv.appendChild(buttonThree)

const multiplyButton = document.createElement("button")
multiplyButton.classList.add("operator")
multiplyButton.setAttribute("id", "multiply")
multiplyButton.textContent = "*"
buttonsDiv.appendChild(multiplyButton)

const buttonZero = document.createElement("button")
buttonZero.classList.add("number-button")
buttonZero.setAttribute("id", "zero")
buttonZero.textContent = "0"
buttonsDiv.appendChild(buttonZero)

const addButton = document.createElement("button")
addButton.classList.add("operator")
addButton.setAttribute("id", "add")
addButton.textContent = "+"
buttonsDiv.appendChild(addButton)

const equalButton = document.createElement("button")
equalButton.classList.add("equal")
equalButton.setAttribute("id", "equal")
equalButton.textContent = "="
buttonsDiv.appendChild(equalButton)

const clearButton = document.createElement("button")
clearButton.classList.add("clear")
clearButton.textContent = "CLEAR"
buttonsDiv.appendChild(clearButton)

let firstNumber = "";
let sign = ""
let secondNumber = "";
let total = null;

function add(num1,num2){
    total = num1+num2 
    console.log(total)
    display.textContent = total
}
function subtract(num1,num2){
    total = num1 - num2 
    console.log(total)
   
}

function multiply(num1,num2){
    total =  num1 * num2 
    console.log(total)
}

function divide(num1,num2){
    if(num1 / num2 == Infinity){
        console.log("Be serious")
        total =  NaN
        console.log(total)
    }else{
    total =  num1 / num2
    console.log(total)
    }
}

function operate(num1,operator,num2){
    if(operator == "+"){
        return add(num1,num2)
    }else if(operator == "-"){
        return subtract(num1,num2)
    }else if(operator == "*"){
        return multiply(num1,num2)
    }else if(operator == "/"){  
       return divide(num1,num2)
    }
}

let operator = ""
const operators = document.querySelectorAll(".operator")
const numberButtons = document.querySelectorAll(".number-button")
numberButtons.forEach((numberButton=>{
    numberButton.addEventListener("click",(event)=>{
        let number = event.target
        if(operator == ""){
            display.textContent += number.textContent
            firstNumber = +display.textContent
            console.log(firstNumber)
        }else{
            display.textContent += number.textContent
            secondNumber = +display.textContent
          console.log(secondNumber)
        }
       
    })    
}))

operators.forEach((opera=>{
    opera.addEventListener("click",(event)=>{
        calculate()
        display.textContent = secondNumber
       // display.textContent = ""
       operator = event.target.textContent
      
}) 
}))

function calculate(){
while(secondNumber != ""){
    operate(firstNumber,operator,secondNumber)
    firstNumber = total
    secondNumber = ""
    total = ""
   operator = ""
}
}


const cleButton = document.querySelector(".clear")
cleButton.addEventListener("click",()=>{
    display.textContent = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    total = ""
    
})

const equButton = document.querySelector(".equal")
equButton.addEventListener("click",()=>{
    operate(firstNumber,operator,secondNumber)
    display.textContent = total
    firstNumber = total 
    secondNumber = ""
    operator = ""
    total = ""
})


