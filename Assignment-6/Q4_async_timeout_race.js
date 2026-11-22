// Q4 – DevOps Delay: Async Timeout Race

function deployServer(serverName, delayInMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has an independent 20% chance of failing.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
                return;
            }

            console.log(`${serverName} deployment finished.`);
            resolve(`${serverName} is ready`);
        }, delayInMs);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all fulfills only when BOTH deployments succeed.
// If either rejects, the returned Promise rejects.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

// Promise.race settles as soon as the first input Promise settles
// (whether it fulfills or rejects). With successful responses, A is faster.
Promise.race([serverA, serverB])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.error("Fastest response failed:", error.message));
