// Q9. Odd–Even Number Analyzer

const results = [];

for (let number = 1; number <= 30; number++) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push({ number, classification });
}

console.log("Number Analyzer Results");
console.log("-----------------------");
results.forEach(result => {
    console.log(`${result.number}: ${result.classification}`);
});

console.log("Results array:", results);
