// Premitive DataTypes

let age = 25;
console.log(typeof age); // number

let name = "Harsh";
console.log(typeof name); // string

let isStudent = true;
console.log(typeof isStudent); // boolean

let address = null;
console.log(typeof address); // object (this is a known quirk in JavaScript)

let phoneNumber;
console.log(typeof phoneNumber); // undefined


let userInfo = {
    name: "Harsh",
    isStudent: true,
    personalInfo :{
        age: 20
    }
}

console.log(userInfo.name); // Harsh
console.log(userInfo.isStudent); // true
console.log(userInfo.personalInfo.age); // 20

console.log(typeof userInfo); // object
console.log(typeof userInfo.personalInfo); // object


let fruits = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Non-primitive DataTypes
// Non-primitive data types are objects and arrays. They can hold multiple values and have properties and methods.
// They are mutable, meaning their values can be changed after they are created.


// Difference between primitive and non-primitive data types:
// 1. Primitive data types are immutable, meaning their values cannot be changed after they are created. Non-primitive data types are mutable, meaning their values can be changed after they are created.
// 2. Primitive data types are stored in stack memory, while non-primitive data types are stored in heap memory.
// 3. Primitive data types are compared by value, while non-primitive data types are compared by reference.


// what is heap memory and stack memory?
// Stack memory is a region of memory that stores primitive data types and function call information.
// It is organized in a last-in-first-out (LIFO) manner, meaning the last item added to the stack is the first one to be removed.
// Stack memory is faster to access but has limited size.

// Heap memory is a region of memory that stores non-primitive data types (objects and arrays).
// It is not organized in any particular order and can grow and shrink dynamically.
// Heap memory is slower to access but has a larger size limit compared to stack memory.