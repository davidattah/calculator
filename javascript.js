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
