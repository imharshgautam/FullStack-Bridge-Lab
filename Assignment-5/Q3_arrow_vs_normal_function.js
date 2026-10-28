// Q3: Arrow functions do not create their own `this`.
// In this example, `this.name` is undefined in a typical Node.js CommonJS file
// because the arrow function inherits `this` from its surrounding scope.
const user = {
  name: "Harsh",
  showName: () => {
    console.log("Arrow function name:", this.name); // Usually undefined
  }
};

user.showName();

// Fix: a normal method function receives `this` from the object before the dot.
const correctedUser = {
  name: "Harsh",
  showName: function () {
    console.log("Normal function name:", this.name);
  }
};

correctedUser.showName();
