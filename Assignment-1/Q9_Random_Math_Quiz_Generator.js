// Q9. Random Math Quiz Generator

// Generate two random integers between 1 and 20.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate the answer according to the randomly selected operator.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
    default:
        console.log("Unknown operator.");
}

const formattedAnswer = operator === "/"
    ? correctAnswer.toFixed(2)
    : String(correctAnswer);

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${formattedAnswer}`);
