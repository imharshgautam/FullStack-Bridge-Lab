// Q8 – Strict Mode Showdown
"use strict";

// The original code fails to parse in strict mode because duplicate parameter names
// are forbidden. Since this file is strict, the invalid function is shown as a comment.
//
// function demo(a, a) {
//     total = 10;   // Would be ReferenceError: total is undeclared.
//     delete total; // Deleting an unqualified identifier is a syntax error in strict mode.
// }
// demo(5, 10);

// Correct ES6 version: unique parameters, explicit declaration, no deleting variables.
function demo(firstValue, secondValue) {
    const total = 10;
    console.log(`First value: ${firstValue}`);
    console.log(`Second value: ${secondValue}`);
    console.log(`Total: ${total}`);
    // If the value should be cleared, use a mutable binding: let total = 10; total = 0;
    // Do not use delete on a local variable.
}

demo(5, 10);

/*
Without strict mode (classic non-module script):
- Duplicate parameter names may be accepted in a non-strict function.
- Assigning to an undeclared total may create a global property in many classic scripts.
- `delete total` on an unqualified identifier generally returns false rather than deleting it.
With strict mode:
- Duplicate formal parameters are a SyntaxError.
- Assigning to an undeclared identifier is a ReferenceError.
- Deleting an unqualified identifier is a SyntaxError.
ES modules and class bodies are strict by default.
*/
