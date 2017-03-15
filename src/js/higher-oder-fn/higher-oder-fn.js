// Higher-Order Functions in JavaScript: Functions that take functions as arguments or return functions

// 1. Functions that take other functions as arguments
function applyOperation(x, y, operation) {
  return operation(x, y);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log("applyOperation", applyOperation(5, 3, add)); // Output: 8
console.log("applyOperation", applyOperation(5, 3, multiply)); // Output: 15

// Explanation: applyOperation is a higher-order function that takes a function as its third argument

// 2. Functions that return new functions
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("createMultiplier", double(5)); // Output: 10
console.log("createMultiplier", triple(5)); // Output: 15

// Explanation: createMultiplier is a higher-order function that returns a new function

// 3. Array methods as higher-order functions
const numbers = [1, 2, 3, 4, 5];

// map
const squared = numbers.map(function (num) {
  return num * num;
});
console.log("map", squared); // Output: [1, 4, 9, 16, 25]

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter", evenNumbers); // Output: [2, 4]

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce", sum); // Output: 15

// Explanation: map, filter, and reduce are higher-order functions that take callback functions as arguments

// 4. Function composition
const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const square = (x) => x * x;

const addOneThenSquare = compose(square, addOne);

console.log("compose", addOneThenSquare(3)); // Output: 16

// Explanation: compose is a higher-order function that returns a new function combining two functions
