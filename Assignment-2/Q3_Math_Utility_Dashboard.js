// Q3. Math Utility Dashboard

const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerOfThree = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard
----------------------
Original number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${powerOfThree.toFixed(2)}
Random number (10–50): ${randomNumber}
`;

console.log(summary);
