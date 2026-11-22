// Q9 – Fitness App Analytics (filter + reduce + map)

class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.workoutData.reduce(
            (total, user) => total + user.calories,
            0
        );

        return totalCalories / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(user =>
            `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users (more than 7,000 steps):");
    console.table(analytics.getActiveUsers());

    console.log(`Average calories burned: ${analytics.getAverageCalories().toFixed(2)}`);

    console.log("User summaries:");
    analytics.getUserSummary().forEach(summary => console.log(summary));
} catch (error) {
    console.error("Fitness analytics error:", error.message);
}

// Empty-data validation example:
// new FitnessAnalytics([]);
