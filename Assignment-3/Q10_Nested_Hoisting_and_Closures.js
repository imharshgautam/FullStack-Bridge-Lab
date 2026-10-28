// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
    console.log(`outer count before assignment: ${count}`); // undefined
    var count = 5;

    function inner() {
        console.log(`inner count before assignment: ${count}`); // undefined
        var count = 10; // Separate local binding shadows outer count.
        console.log(`inner count after assignment: ${count}`); // 10
    }

    inner();
    console.log(`outer count after inner(): ${count}`); // 5
}

outer();

// Arrow-function version: the arrow has its own local var binding here as well.
// Changing function syntax alone does not remove var hoisting or shadowing.
function outerWithArrow() {
    console.log(`arrow version outer count before assignment: ${count}`); // undefined
    var count = 5;

    const innerArrow = () => {
        console.log(`arrow inner count before assignment: ${count}`); // undefined
        var count = 10;
        console.log(`arrow inner count after assignment: ${count}`); // 10
    };

    innerArrow();
    console.log(`arrow version outer count after call: ${count}`); // 5
}

outerWithArrow();

/*
Hoisting and execution contexts:
- outer() has its own function execution context. Its local `var count` is hoisted
  and initialized to undefined, then assigned 5.
- inner() creates a separate execution context with its own hoisted `var count`.
  That local binding shadows outer's count, so it starts as undefined and later becomes 10.
- The arrow function also has its own function body scope for its local var binding.
- Call stack during debugging: global/script -> outer() -> inner() (then inner returns,
  and outer resumes). For the arrow version: global/script -> outerWithArrow() ->
  innerArrow() (then it returns).
Debug tip: set breakpoints on each console.log, run with F5, and inspect Call Stack
and the local Variables panel at each pause.
*/
