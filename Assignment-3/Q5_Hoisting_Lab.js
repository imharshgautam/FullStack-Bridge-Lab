// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence, annotated rather than executed as-is:
// console.log(score); // undefined: var declaration is hoisted and initialized to undefined.
// announce();         // Works: function declaration is hoisted with its body.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
// The original sequence throws ReferenceError at console.log(status) inside startGame,
// because startGame() is called before the let status initialization (TDZ).

console.log("Hoisting demonstration");
var score;
console.log(`score before assignment: ${score}`);
score = 50;

function announce() {
    console.log("Game started");
}
announce();

let status = "ready";
function startGame() {
    console.log(`Game status: ${status}`);
}
startGame();

// Arrow functions are expressions, not hoisted like function declarations.
// Call them only after their const binding has been initialized.
const announceArrow = () => console.log("Game started (arrow function)");
const startGameArrow = () => console.log(`Game status (arrow): ${status}`);
announceArrow();
startGameArrow();

/*
Memory notes:
- var score: binding is hoisted and initialized to undefined.
- function announce: declaration and function body are available before its line.
- let status: binding exists but is uninitialized in the temporal dead zone until
  execution reaches its declaration.
- const arrow functions: the variable binding is in the TDZ until initialized.
*/
