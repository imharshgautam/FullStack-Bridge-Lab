// Loops in JavaScript


var i = 0;
for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log("This is outside the loop: " + i); // 10 (the value of i is 10 after the loop ends)

// loop is a cpu intensive task, it can take a lot of time to execute if the loop is large. then why next log is waiting for the loop to complete?
// because javascript is a single threaded language,
// it can only execute one task at a time.
// so it has to wait for the loop to complete before executing the next log statement.

// The loop is a synchronous task, it blocks the execution of the next statement until it is completed.



let i = 0;
for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log("This is outside the loop: " + i); // 0 (the value of i is 0 because it is declared with let, which has block scope, so it is not accessible outside the loop)





// for of loop is used to iterate over the values of an iterable object (like an array, string, etc.)
let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits){
    console.log(fruit);
}

// for in loop is used to iterate over the keys of an object.

let userInfo = {
    name: "Harsh",
    course: "BTech",
    branch: "CSE",
    rollNo: 2415000643,
    section: "CB"  
}

for(let key in userInfo){
    console.log(key + ": " + userInfo[key]);
}


// for in loop is used to iterate over the keys of an object, but it can also be used to iterate over the indices of an array.

let numbers = [1, 2, 3, 4, 5];

for(let index in numbers){
    console.log(index + ": " + numbers[index]);
}

// for each loop is used to iterate over the values of an array, but it is not a part of the for loop family. It is a method of the array object.

numbers.forEach(function(number, index){
    console.log(index + ": " + number);
});

// for each loop is used to iterate over the values of an array, but it is not a part of the for loop family. It is a method of the array object.

numbers.forEach((number, index) => {
    console.log(index + ": " + number);
});
