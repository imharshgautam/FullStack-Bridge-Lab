// Q3 – Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
    constructor(category, message) {
        super(message);
        this.name = "TransactionValidationError";
        this.category = category;
    }
}

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    // Debug breakpoint suggestion: set a breakpoint on the next try line
    // and watch index, transaction, validTransactions, invalidTransactions.
    try {
        if (transaction === null || transaction === undefined) {
            throw new TransactionValidationError("null-entry", "Transaction entry is null");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionValidationError("missing-data", "Transaction is missing id or amount");
        }
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            throw new TransactionValidationError("invalid-amount", "Amount must be a finite number");
        }
        if (transaction.amount < 0) {
            throw new TransactionValidationError("negative-amount", "Transaction amount cannot be negative");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            index,
            category: error.category || "unexpected-error",
            message: error.message
        });
        console.log(`Entry ${index + 1}: INVALID [${error.category || error.name}] ${error.message}`);
    }
}

console.log("\nTransaction Summary");
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
