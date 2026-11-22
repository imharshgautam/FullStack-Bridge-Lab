// Q1 – Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (!Array.isArray(this.marks) || this.marks.length === 0) {
            throw new Error("Marks must be a non-empty array.");
        }

        const totalMarks = this.marks.reduce((total, mark) => total + mark, 0);
        return totalMarks / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test the class with three students.
const students = [
    new Student("Aarav", [85, 90, 78, 88]),
    new Student("Diya", [72, 65, 70, 68]),
    new Student("Kabir", [35, 42, 30, 38])
];

students.forEach(student => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});

// Grade boundaries are an example grading scale; adjust them if your
// instructor has specified a different scale.
