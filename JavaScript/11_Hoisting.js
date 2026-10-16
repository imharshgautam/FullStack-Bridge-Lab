// Hoisting
// Before execution, JavaScript creates bindings for declarations in their scope.
// Hoisting describes this setup; it does not move source code in the file.

console.log(varX); // undefined: var is initialized with undefined during setup.
var varX; // The declaration is hoisted, but an assignment is not.

a(); // Hello world: function declarations are available before their definition.

function a(){
    console.log("Hello world")
}

 a(); // Function declarations can also be called after their definition.

// let and const bindings are also created early, but are uninitialized in the
// temporal dead zone (TDZ) until execution reaches their declarations.
// Uncomment either line to see a ReferenceError (which stops script execution).
// console.log(letX);
// console.log(constY);

let letX = 10;
const constY = 20;

console.log(letX); // 10
console.log(constY); // 20

