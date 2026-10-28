// Q2 – Employee Bonus Calculator
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("Employee Bonus Report");
console.log("=====================");

for (const employee of employees) {
    try {
        // Validate required properties before conversion.
        if (!employee || employee.name === undefined ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary or years could not be converted to a number");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(
            `${employee.name}: Salary ₹${salary.toFixed(2)}, ` +
            `Experience ${years} years, Bonus ${(bonusRate * 100).toFixed(0)}% ` +
            `(₹${bonus.toFixed(2)}), Total ₹${totalPay.toFixed(2)}`
        );
    } catch (error) {
        console.log(`Employee processing error: ${error.message}`);
    }
}

// Strict mode prevents accidental assignments to undeclared variables.
// For example, writing "total = 100;" here would throw ReferenceError.
