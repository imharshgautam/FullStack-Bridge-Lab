// Q10 – The Final Delivery: Async Pipeline Debugger

// Simulates one asynchronous delivery step.
// Every step takes a random 1–2 seconds and has a 20% failure chance.
function performStep(stepName, successMessage) {
    const delay = 1000 + Math.floor(Math.random() * 1001);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed`));
                return;
            }

            console.log(successMessage);
            resolve();
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await pauses this async function until the current step settles.
        // The next step starts only if the current step fulfills.
        await performStep("takeOrder", "Step 1: Order taken");
        await performStep("prepare", "Step 2: Food prepared");
        await performStep("pack", "Step 3: Package ready");
        await performStep("dispatch", "Step 4: Out for delivery");
        await performStep("deliver", "Delivery completed!");

        console.log("Pipeline finished successfully.");
    } catch (error) {
        // A rejection from any awaited step jumps directly to this catch.
        // Remaining steps are skipped after a failure.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// Event loop notes:
// - Calling an async function begins executing it synchronously until its
//   first await that needs to wait for a Promise.
// - performStep schedules a timer and returns a pending Promise.
// - While this function is suspended, Node.js can process other callbacks
//   and timers; the JavaScript thread is not blocked by the waiting period.
// - When the Promise settles, the continuation after await is scheduled
//   through the microtask mechanism.
// - try/catch handles Promise rejections from awaited operations.
