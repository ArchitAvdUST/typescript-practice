import input from "./input";

function add( num1: number , num2: number): number {
    return num1 + num2;
}

function substract( num1: number , num2: number): number {
    return num1-num2;
}

function multiply( num1: number, num2: number): number {
    return num1 * num2;
}

function division( num1: number, num2: number): number {
    if( num2 === 0){
        throw new console.error("Cannot divide a number by 0");
    }
    else{
        return num1/num2;
    }
}

let num1 = 20;
let num2 = 5;
let operator = "*";


if(operator === "+"){
    console.log(add(num1,num2));
}
else if(operator === "-"){
    console.log(substract(num1,num2));
}
else if(operator === "*" || operator==="x"){
    console.log(multiply(num1,num2));
}
else if (operator === "/"){
    console.log(division(num1,num2));
}
else{
    throw new console.error("Invalid operator");
}