// Q4: Constructor function and a shared prototype method.
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Both car objects share this single method through Car.prototype.
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Camry");
const carTwo = new Car("Tesla", "Model 3");

carOne.getDetails();
carTwo.getDetails();

console.log(
  "Shared method:",
  carOne.getDetails === carTwo.getDetails
); // true
