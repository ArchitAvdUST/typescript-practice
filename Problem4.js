"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 === 0) {
        throw new console.error("Cannot divide a number by 0");
    }
    else {
        return num1 / num2;
    }
}
var num1 = 20;
var num2 = 5;
var operator = "*";
if (operator === "+") {
    console.log(add(num1, num2));
}
else if (operator === "-") {
    console.log(substract(num1, num2));
}
else if (operator === "*" || operator === "x") {
    console.log(multiply(num1, num2));
}
else if (operator === "/") {
    console.log(division(num1, num2));
}
else {
    throw new console.error("Invalid operator");
}
