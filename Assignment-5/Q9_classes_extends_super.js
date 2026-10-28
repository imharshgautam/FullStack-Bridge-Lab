// Q9: The same Person -> Student inheritance using ES6 classes.
class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // Calls Person's constructor and initializes `name`.
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const student = new Student("Harsh", "CSE");
student.showName();
student.showBranch();

console.log(
  "Student inherits from Person:",
  student instanceof Student && student instanceof Person
); // true

// This behaves like Q5's prototype-based inheritance.
// JavaScript classes use prototypes internally; `extends` sets up the chain.
