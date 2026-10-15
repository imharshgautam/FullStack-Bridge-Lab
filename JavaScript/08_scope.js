// Scope in JavaScript

// Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
var globalVar = "I am a global variable";

function globalScopeExample() {
    console.log(globalVar); // I am a global variable
}

globalScopeExample();
console.log(globalVar); // I am a global variable

// Function Scope: Variables declared within a function are only accessible within that function.

function functionScopeExample() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // I am a function variable
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or loop) are only accessible within that block.

if (true) {
    let blockVar = "I am a block variable";
    const blockConst = "I am a block constant";
    console.log(blockVar); // I am a block variable
    console.log(blockConst); // I am a block constant
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

// Hoisting: In JavaScript, variable and function declarations are hoisted to the top of their containing scope. However, only the declarations are hoisted, not the initializations.

console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

hoistedFunction(); // I am a hoisted function
function hoistedFunction() {
    console.log("I am a hoisted function");
}

// console.log(notHoistedVar); // Uncaught ReferenceError: notHoistedVar is not defined
let notHoistedVar = "I am not hoisted";

// console.log(notHoistedConst); // Uncaught ReferenceError: notHoistedConst is not defined
const notHoistedConst = "I am not hoisted";

