// Q5. Weather Activity Planner

const temperature = 24; // Temperature in Celsius.
const isRaining = false;
const windSpeed = 12; // Wind speed in km/h.

// Rain takes priority; otherwise check heat, cold and wind conditions.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature > 35 || (temperature < 15 && windSpeed > 20)) {
    // Combined OR condition included to demonstrate logical operators.
    console.log("Choose an indoor activity.");
} else {
    console.log("Perfect day for a walk.");
}
