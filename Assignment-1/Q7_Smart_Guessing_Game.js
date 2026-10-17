// Q7. Smart Guessing Game (Number Range)

// Generate a secret integer from 1 to 50, inclusive.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Set a test guess here, or replace it with a prompt in a browser.
const userGuess = 24;

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`); // Shown for testing; remove in a real game.

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // If not exact, check whether the guess is within three numbers of the answer.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too high");
    } else if (userGuess < secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too low");
    } else {
        console.log("Please enter a number between 1 and 50.");
    }
}
