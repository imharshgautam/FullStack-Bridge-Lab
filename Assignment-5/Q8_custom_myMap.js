// Q8: A simple custom version of Array.prototype.map().
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const sourceArray = Object(this);
  const result = new Array(sourceArray.length);

  for (let index = 0; index < sourceArray.length; index++) {
    // Match map(): skip indexes that do not exist in sparse arrays.
    if (index in sourceArray) {
      result[index] = callback.call(
        thisArg,
        sourceArray[index],
        index,
        sourceArray
      );
    }
  }

  return result;
};

console.log([1, 2, 3].myMap((number) => number * 2)); // [2, 4, 6]
console.log([1, 2, 3].myMap((number, index) => number + index)); // [1, 3, 5]

// Note: In production code, avoid adding methods directly to built-in prototypes.
