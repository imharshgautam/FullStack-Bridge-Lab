// Q3. Monthly Expense Tracker

// Monthly expenses for five categories (edit these values as needed).
const expenses = {
    food: 6500,
    travel: 1800,
    rent: 9000,
    bills: 2200,
    leisure: 1500
};

let total = 0;

// Add each category expense to the total using the assignment operator.
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
let finalAmount = total;
finalAmount += total * taxRate; // Add 10% tax to the total.

console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total before tax: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${(total * taxRate).toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
