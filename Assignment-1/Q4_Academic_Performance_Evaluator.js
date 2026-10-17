// Q4. Academic Performance Evaluator

// Enter marks for five subjects (each out of 100).
const marks = [88, 91, 79, 86, 90];

// Validate that five numeric marks are provided, each between 0 and 100.
if (
    marks.length !== 5 ||
    marks.some(mark => typeof mark !== "number" || mark < 0 || mark > 100)
) {
    console.log("Invalid input: enter five marks between 0 and 100.");
} else {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const percentage = (totalMarks / (marks.length * 100)) * 100;
    const hasFailedSubject = marks.some(mark => mark < 35);

    console.log(`Average marks: ${average.toFixed(2)}`);
    console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

    // Any subject below 35 means the student is detained, regardless of average.
    if (hasFailedSubject || percentage < 50) {
        console.log("Detained");
    } else if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else {
        console.log("Promoted");
    }
}
