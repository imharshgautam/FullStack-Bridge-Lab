// Q4 – Employee Inheritance and Runtime Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is completing general ${this.department} tasks.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Override the parent class method.
    work() {
        return `${this.name} is managing the ${this.department} team of ${this.teamSize} people.`;
    }
}

const employees = [
    new Employee("Riya", "Engineering"),
    new Manager("Arjun", "Engineering", 8),
    new Employee("Meera", "Human Resources"),
    new Manager("Dev", "Sales", 5)
];

// Runtime polymorphism: the same work() call invokes the implementation
// belonging to each object's actual class.
employees.forEach(employee => console.log(employee.work()));
