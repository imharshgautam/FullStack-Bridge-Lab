// Q5 – Frontend Rush: Avoiding Callback Hell

// Version 1: Nested callbacks (callback hell).
// Each callback starts the next stage only after the previous stage finishes.
function runWithCallbacks() {
    console.log("\\n--- Callback version ---");

    setTimeout(() => {
        console.log("Design completed");
        setTimeout(() => {
            console.log("Build completed");
            setTimeout(() => {
                console.log("Tests passed");
                setTimeout(() => {
                    console.log("Deployment completed");
                    setTimeout(() => {
                        console.log("Celebration time!");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Version 2: Promise-based stage helper used by async/await.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${stageName} completed`);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("\\n--- Async/await version ---");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Pipeline finished!");
}

// Run the two demonstrations one after another so their logs do not overlap.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    runWithCallbacks();
    // Five callback stages take about five seconds. Wait before starting
    // the second demonstration to keep the output easy to read.
    await delay(5200);
    await runWithAsyncAwait();
}

main();

// Why async/await is more readable:
// - It expresses the sequence in a top-to-bottom style.
// - It avoids deeply nested callback functions.
// - try/catch can handle errors in a familiar way.
// - It does not block the JavaScript thread; await pauses this async
//   function and lets the event loop process other work.
