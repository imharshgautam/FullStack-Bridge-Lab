// Q10. Citizen Eligibility Validator

// Change these values to test different cases.
const age = 22;
const isCitizen = true;

// Evaluate citizenship and age using nested if-else statements.
if (isCitizen && age >= 18) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Eligible to vote only.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
