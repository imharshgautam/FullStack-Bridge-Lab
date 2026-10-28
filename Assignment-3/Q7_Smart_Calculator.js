// Q7 – Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unsupported operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

class CalculatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorError";
    }
}

function calculate(operation, first, second) {
    switch (operation) {
        case "add":
            return first + second;
        case "divide":
            if (second === 0) {
                throw new CalculatorError("Cannot divide by zero.");
            }
            return first / second;
        case "power":
            return Math.pow(first, second);
        case "root":
            if (first < 0) {
                throw new CalculatorError("Cannot calculate the real square root of a negative number.");
            }
            return Math.sqrt(first);
        case "subtract":
            return first - second;
        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("Smart Calculator Summary");
console.log("=========================");

for (const operation of operations) {
    try {
        // Root uses num1; other operations use both numbers.
        const result = calculate(operation, num1, num2);
        console.log(`${operation}(${num1}, ${num2}) = ${result}`);
    } catch (error) {
        console.log(`${operation}: ERROR — ${error.name}: ${error.message}`);
    }
}

// Demonstrate invalid operation handling.
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`unknown operation: ERROR — ${error.name}: ${error.message}`);
}
