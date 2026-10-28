// Q4 – Debugging Mystery
"use strict";

// Broken version (do not run as active code):
// function showMessageBroken() {
//     greeting = "Welcome"; // ReferenceError in strict mode: greeting is undeclared.
//     console.log(greeting);
// }
// showMessageBroken();

// Corrected version: declare the variable in function scope.
function showMessage() {
    const greeting = "Welcome"; // Local variable, available inside this function.
    const watchMessage = greeting; // Add "watchMessage" to VS Code Watch panel.
    console.log(greeting);
    console.log(`Watch variable: ${watchMessage}`);
}

showMessage();

/*
Debug in VS Code:
1. Set a breakpoint on: const greeting = "Welcome";
2. Start Run and Debug (F5).
3. Add "greeting" and "watchMessage" to the Watch panel.
4. Step Over (F10), then inspect the Variables panel and Call Stack.
5. The call stack shows showMessage() above the global/script context.

Why it failed: strict mode forbids creating global variables through an
assignment to an undeclared identifier. Declaring const makes the variable's
scope explicit and prevents accidental global pollution.
*/
