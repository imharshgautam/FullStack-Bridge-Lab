// Q5: Inheritance using constructor functions and prototypes.
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Initialize the inherited name property.
  this.branch = branch;
}

// Student instances inherit methods from Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Harsh", "CSE");
student.showName();
student.showBranch();

console.log(
  "Student inherits Person methods:",
  student instanceof Student && student instanceof Person
); // true
