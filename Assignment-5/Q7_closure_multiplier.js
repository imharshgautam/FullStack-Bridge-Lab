// Q7: A closure remembers variables from its outer function's scope.
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

// Even after makeMultiplier returns, the returned function remembers
// the value of `multiplier` from the call that created it.
