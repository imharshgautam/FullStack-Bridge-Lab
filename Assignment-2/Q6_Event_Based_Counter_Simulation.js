// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    // Nested function can access and read the outer function's scope.
    function showCount() {
        console.log(`Nested function sees count: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Simulate click events by calling the functions manually.
increment();
increment();
decrement();
increment();

console.log(`Final count: ${count}`);
