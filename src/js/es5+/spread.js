// Spread Operator in JavaScript

/**
 * The spread operator (...) allows an iterable such as an array or string
 * to be expanded in places where zero or more arguments or elements are expected.
 * It can be used in function calls, array literals, and object literals.
 */

// 1. Spread in function calls
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log("1. Spread in function calls", sum(...numbers)); // Output: 6

// Explanation: The spread operator expands the array into individual arguments

// 2. Spread in array literals
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log("2. Spread in array literals", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Explanation: Spread is used to combine arrays

// 3. Spread in object literals
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const mergedObj = { ...obj1, ...obj2 };
console.log("3. Spread in object literals", mergedObj); // Output: { foo: 'baz', x: 42, y: 13 }

// Explanation: Spread is used to merge objects. Note that duplicate keys are overwritten

// 4. Spread with strings
const str = "Hello";
const chars = [...str];
console.log("4. Spread with strings", chars); // Output: ['H', 'e', 'l', 'l', 'o']

// Explanation: Spread can be used to split a string into an array of characters

// 5. Copying arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray, 4, 5, 6];
console.log("5. Copying arrays originalArray", originalArray); // Output: [1, 2, 3]
console.log("5. Copying arrays and modifying copiedArray", copiedArray); // Output: [1, 2, 3, 4, 5, 6]

// Explanation: Spread creates a shallow copy of the array

/**
 * Key Points:
 * - Spread operator provides a concise way to expand elements
 * - It can be used with any iterable object
 * - It creates shallow copies, not deep copies
 * - Useful for function calls, array/object manipulation, and copying
 */
