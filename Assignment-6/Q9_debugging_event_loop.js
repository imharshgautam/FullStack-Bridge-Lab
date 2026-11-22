// Q9 – Debugging the Event Loop

// Predicted output order BEFORE execution:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// The two direct console.log calls run synchronously on the call stack.
// Promise.then queues its callback as a microtask.
// setTimeout queues its callback as a macrotask (timer task).
// Once synchronous JavaScript finishes, the event loop drains microtasks
// before it takes the next eligible macrotask. Therefore the Promise callback
// appears before the timeout callback, even with a 0ms timer.
