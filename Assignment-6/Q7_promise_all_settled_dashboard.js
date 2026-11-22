// Q7 – The Lazy Loader: Promise Combinator Practice

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Profile service unavailable"))
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Posts service unavailable"))
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Messages service unavailable"))
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled waits until every Promise has fulfilled or rejected.
    // Unlike Promise.all(), one rejection does not short-circuit the result.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]}: SUCCESS — ${result.value}`);
        } else {
            console.error(`${moduleNames[index]}: FAILED — ${result.reason.message}`);
        }
    });

    console.log(`Total time taken: ${Date.now() - startTime} ms`);
}

loadDashboard().catch(error => console.error("Unexpected dashboard error:", error));
