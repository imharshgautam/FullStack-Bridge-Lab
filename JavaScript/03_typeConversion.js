let score = 100;
console.log(typeof score); // number

let scoreString = String(score);
console.log(typeof scoreString); // string
console.log(scoreString); // "100"

let isPassed = true;
console.log(typeof isPassed); // boolean

let isPassedString = String(isPassed);
console.log(typeof isPassedString); // string
console.log(isPassedString); // "true"

let nullValue = null;
console.log(typeof nullValue); // object

let userName = "Harsh";
console.log(typeof userName); // string

let userNameNumber = Number(userName);
console.log(typeof userNameNumber); // number
console.log(userNameNumber); // NaN (Not a Number) // This is because "Harsh" cannot be converted to a number 

let userNameBoolean = Boolean(userName);
console.log(typeof userNameBoolean); // boolean
console.log(userNameBoolean); // true (non-empty strings are truthy)

let emptyString = "";
console.log(typeof emptyString); // string

let emptyStringBoolean = Boolean(emptyString);
console.log(typeof emptyStringBoolean); // boolean
console.log(emptyStringBoolean); // false (empty strings are falsy)


console.log(403+"200"); // "403200" 
console.log(typeof (403+"200")); // string (the number 403 is converted to a string for the concatenation operation)

console.log(403-"200"); // 203 (the string "200" is converted to a number for the subtraction operation)
console.log(typeof (403-"200")); // number (the result is a number)

console.log(5*"2"); // 10 (the string "2" is converted to a number for the multiplication operation)
console.log(typeof (5*"2")); // number (the result is a number)

console.log(200+5); // 205 (both are numbers, so addition is performed)
console.log(typeof (200+5)); // number (the result is a number)

console.log("200"+5); // "2005" (the number 5 is converted to a string for the concatenation operation)
console.log(typeof ("200"+5)); // string (the result is a string)

console.log("200"-5); // 195 (the string "200" is converted to a number for the subtraction operation)
console.log(typeof ("200"-5)); // number (the result is a number)

console.log("200"*5); // 1000 (the string "200" is converted to a number for the multiplication operation)
console.log(typeof ("200"*5)); // number (the result is a number)

console.log("200"/5); // 40 (the string "200" is converted to a number for the division operation)
console.log(typeof ("200"/5)); // number (the result is a number)

console.log("200"%"3"); // 2 (the string "200" is converted to a number for the modulus operation)
console.log(typeof ("200"%"3")); // number (the result is a number)

console.log("200"**"2"); // 40000 (both strings are converted to numbers for the exponentiation operation)
console.log(typeof ("200"**"2")); // number (the result is a number)

