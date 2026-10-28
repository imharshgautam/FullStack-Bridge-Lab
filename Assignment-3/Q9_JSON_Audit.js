// Q9 – JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanEntries = [];
const auditErrors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    const rawLine = rawData[index];

    // Debug tip: set a breakpoint here and watch lineNumber, rawLine, cleanEntries.
    try {
        const parsed = JSON.parse(rawLine);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const cleanUser = { ...parsed, age };
        cleanEntries.push(cleanUser);

        if (age < 18) {
            under18Users.push(cleanUser);
        }

        console.log(`Line ${lineNumber}: VALID`);
    } catch (error) {
        auditErrors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
    }
}

console.log("\nJSON Audit Summary");
console.log("Clean entries:", cleanEntries);
console.log("Errors:", auditErrors);
console.log("Under-18 users:", under18Users);
console.log(`Valid entries: ${cleanEntries.length}`);
console.log(`Invalid entries: ${auditErrors.length}`);

/*
Control flow: JSON.parse throws for malformed JSON, so execution jumps to catch.
The missing-key check throws a regular Error, which also jumps to catch.
The loop continues with the next line after each caught error.
*/
