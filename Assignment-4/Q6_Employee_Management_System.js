// Q6: Employee Management System (Classes + Object Methods)
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) throw new RangeError("Bonus percent cannot be negative.");
        this.salary += this.salary * (percent / 100);
    }

    displayDetails() {
        return `${this.name} (${this.department}) | Monthly: ₹${this.salary.toFixed(2)} | Annual: ₹${this.getAnnualSalary().toFixed(2)}`;
    }
}

const employees = [
    new Employee(1, "Amit", "Engineering", 50000),
    new Employee(2, "Sara", "HR", 42000),
    new Employee(3, "Kiran", "Finance", 48000),
    new Employee(4, "Neha", "Marketing", 39000),
    new Employee(5, "Rohan", "Support", 35000)
];

employees[0].applyBonus(10);

console.log("Employee Annual Salary Report");
employees.forEach(employee => console.log(employee.displayDetails()));

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\nTotal annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
