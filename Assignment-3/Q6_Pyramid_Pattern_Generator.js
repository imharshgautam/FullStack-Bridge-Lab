// Q6 – Pyramid Pattern Generator
"use strict";

// Change this value to customize the number of rows (default = 5).
// In a browser, you could replace 5 with Number(prompt("Enter row count:")) || 5.
const userInputRows = 5;
const rows = Number.isInteger(userInputRows) && userInputRows > 0
    ? userInputRows
    : 5;

console.log(`Pyramid pattern (${rows} rows)`);
for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern.trimEnd());
}

/*
var comparison:
- If the two loop variables above are changed from let to var, the pattern output
  stays the same because each loop body uses them synchronously.
- But var is function-scoped, not block-scoped, so row and column remain available
  after the loops and reuse the same bindings. With let, they are block-scoped.
- In strict mode, an undeclared loop such as `for (i = 0; i < rows; i++)` throws
  ReferenceError. Always declare loop variables with let/const/var.

Debug tip: set a breakpoint on `pattern += "* ";` and watch row, column, pattern.
Step Over (F10) to observe each character being appended.
*/
