let myData = [10, "Harsh", true, null, undefined, {name: "Harsh"}, [1, 2, 3]];

console.log(myData[0]); // 10
console.log(myData[1]); // Harsh
console.log(myData[2]); // true
console.log(myData[3]); // null
console.log(myData[4]); // undefined
console.log(myData[5].name); // Harsh
console.log(myData[6][0]); // 1

console.log(myData.length); // 7

console.log(typeof myData); // object
console.log(typeof myData[0]); // number
console.log(typeof myData[1]); // string
console.log(typeof myData[2]); // boolean
console.log(typeof myData[3]); // object
console.log(typeof myData[4]); // undefined
console.log(typeof myData[5]); // object
console.log(typeof myData[6]); // object

// Array Methods

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits); // ["Apple", "Banana", "Mango"]

fruits.push("Orange"); // adds Orange to the end of the array
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop(); // removes the last element from the array
console.log(fruits); // ["Apple", "Banana", "Mango"]

fruits.shift(); // removes the first element from the array
console.log(fruits); // ["Banana", "Mango"]

fruits.unshift("Grapes"); // adds Grapes to the beginning of the array
console.log(fruits); // ["Grapes", "Banana", "Mango"]

console.log(fruits.indexOf("Banana")); // 1

fruits.splice(1, 1); // removes 1 element at index 1
console.log(fruits); // ["Grapes", "Mango"]

fruits.splice(1, 0, "Pineapple"); // adds Pineapple at index 1
console.log(fruits); // ["Grapes", "Pineapple", "Mango"]

fruits.splice(1, 1, "Strawberry"); // replaces 1 element at index 1 with Strawberry
console.log(fruits); // ["Grapes", "Strawberry", "Mango"]

let newFruits = fruits.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(newFruits); // ["Strawberry", "Mango"]

let allFruits = fruits.concat(newFruits); // combines two arrays
console.log(allFruits); // ["Grapes", "Strawberry", "Mango", "Strawberry", "Mango"]

