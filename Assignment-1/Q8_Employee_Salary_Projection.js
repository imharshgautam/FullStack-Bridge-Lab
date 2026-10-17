// Q8. Employee Salary Projection

const currentSalary = 50000;
const annualIncrementRate = 8; // Annual raise as a percentage.
let projectedSalary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary by the given percentage each year.
    projectedSalary *= (1 + annualIncrementRate / 100);
    projectedSalary = Math.round(projectedSalary);

    salaryReport.push({
        Year: year,
        "Annual Salary (₹)": projectedSalary.toLocaleString("en-IN"),
        "Increment Rate": `${annualIncrementRate}%`
    });
}

console.table(salaryReport);
