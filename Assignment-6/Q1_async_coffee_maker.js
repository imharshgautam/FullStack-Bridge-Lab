// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes a random 1–2 seconds.

function waitRandomTime() {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    return new Promise(resolve => setTimeout(resolve, delay));
}

function boilWater() {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Water could not be boiled.");
        console.log("Water boiled.");
        return "Hot water";
    });
}

function brewCoffee(water) {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Coffee brewing failed.");
        console.log(`Coffee brewed using ${water}.`);
        return "Freshly brewed coffee";
    });
}

function pourCoffee(coffee) {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Could not pour the coffee.");
        console.log(`${coffee} poured into a cup.`);
    });
}

// Promise chaining ensures that each step starts only after the previous step succeeds.
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
