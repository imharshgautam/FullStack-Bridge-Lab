// Q2: Use a callback to apply an operation to every number.
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, (number) => number * 2);
console.log("Doubled:", doubledNumbers);

const squaredNumbers = applyOperation(numbers, (number) => number ** 2);
console.log("Squared:", squaredNumbers);
