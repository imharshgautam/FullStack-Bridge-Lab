// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout schedules a macrotask (timer callback).
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise.then schedules a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// JavaScript first completes the current synchronous call stack.
// It then drains the microtask queue (including Promise callbacks).
// Only after the microtask queue is empty does it process eligible macrotasks
// such as setTimeout callbacks. A 0ms timeout means "no minimum wait",
// not "run immediately".
