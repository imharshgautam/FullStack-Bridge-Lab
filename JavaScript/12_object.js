// objects are key-value pairs in JavaScript. They are used to store multiple values in a single variable.

const userInfo = {
    Name: "Harsh"

}

// object methods are functions that are stored as object properties. They can be called using the dot notation or bracket notation.

// add properties to the object
userInfo.age = 20;
userInfo["city"] = "New York"; // bracket notation can be used when the property name is dynamic or not a valid identifier. 

// add methods to the object
userInfo.greet = function () {
    console.log(`Hello, my name is ${this.Name} and I am ${this.age} years old.`);
}

// call the method
userInfo.greet(); // Hello, my name is Harsh and I am 20 years old.

console.log(userInfo); // { Name: 'Harsh', age: 20, city: 'New York', greet: [Function (anonymous)] }


