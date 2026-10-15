var string1 = "Hello, World!"; // creates a new string primitive // primitive string

var string2 = new String("Hello, World!"); // creates a new String object // non-primitive string

console.log(typeof string1); // string
console.log(typeof string2); // object

console.log(string1); // Hello, World!
console.log(string1.length); // 13
console.log(string1.includes("World")); // true
console.log(string1.indexOf("World")); // 7
console.log(string1.slice(0, 5)); // Hello // 0 To 5 (not including 5)
console.log(string1.replace("World", "JavaScript")); // Hello, JavaScript!
console.log(string1.toUpperCase()); // HELLO, WORLD!
console.log(string1.toLowerCase()); // hello, world!
console.log(string1.trim()); // Hello, World! (removes whitespace from both ends of the string)
console.log(string1.split(",")); // ["Hello", " World!"] (splits the string into an array of substrings)



// Template literals are string literals that allow embedded expressions.
// You can use multi-line strings and string interpolation features with them. 
// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.


let name = "Alice";
let greeting = `Hello, ${name}!`; // Hello, Alice!  

console.log(greeting); // Hello, Alice!

