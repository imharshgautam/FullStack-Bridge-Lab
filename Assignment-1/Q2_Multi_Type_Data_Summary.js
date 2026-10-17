// Q2. Multi-Type Data Summary

// Sample values representing different data types.
const userName = "Harsh";
const userAge = 20;
const isActive = true;
const favoriteSubjects = ["JavaScript", "Math", "Computer Science"];
const userProfile = { city: "Aligarh", role: "Student" };
const middleName = null;
let optionalValue;

// Build a report using typeof and Array.isArray().
const report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Active", Value: isActive, Type: typeof isActive },
    {
        Label: "Favorite Subjects",
        Value: favoriteSubjects.join(", "),
        Type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects
    },
    { Label: "User Profile", Value: JSON.stringify(userProfile), Type: typeof userProfile },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Optional Value", Value: String(optionalValue), Type: typeof optionalValue }
];

// Print the complete report in one console.table() statement.
console.table(report);
