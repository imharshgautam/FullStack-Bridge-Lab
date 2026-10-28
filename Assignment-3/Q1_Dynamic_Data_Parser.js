// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("Dynamic Data Parser Report");
console.log("==========================");

for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nIndex: ${index}`);
    console.log(`Original: ${stringValue}`);
    console.log(`Number form: ${numberValue}`);
    console.log(`Boolean form: ${booleanValue}`);
    console.log(`String form: "${stringValue}"`);

    // Number("true"), Number("false"), Number("NaN"), Number(" "),
    // Number("100px"), and Number(undefined) are NaN or invalid for this task.
    // Whitespace-only strings are explicitly treated as invalid even though Number(" ") is 0.
    const isWhitespaceString = typeof value === "string" && value.trim() === "";
    const isValidNumber = value !== null &&
        value !== undefined &&
        !isWhitespaceString &&
        Number.isFinite(numberValue);

    if (isValidNumber) {
        validNumbers.push(numberValue);
        console.log("Status: VALID numeric value");
    } else {
        invalidNumbers.push({ index, value: stringValue, reason: "Not accepted as numeric data" });
        console.log("Status: INVALID numeric value");
    }
}

console.log("\nFinal Report");
console.log(`Valid numeric data: ${JSON.stringify(validNumbers)}`);
console.log(`Invalid entries: ${JSON.stringify(invalidNumbers)}`);
