/**
 * Arrow Functions in JavaScript
 *
 * Arrow functions provide a concise syntax for writing function expressions.
 * They have a shorter syntax compared to function expressions and lexically
 * bind the `this` value.
 *
 * Key features:
 * 1. Shorter syntax
 * 2. Lexical `this` binding
 * 3. Implicit return for single expressions
 * 4. Cannot be used as constructors
 */

// Basic syntax
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Implicit return for single expressions
const square = (x) => x * x;

// Lexical `this` binding
const obj = {
  data: [1, 2, 3],
  processData() {
    return this.data.map((num) => {
      // `this` refers to `obj` here
      return num * this.multiplier;
    });
  },
  multiplier: 2
};

// Cannot be used as constructors
// const Person = (name) => {
//   this.name = name; // This will throw an error
// };

// Use cases
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(square(4)); // Output: 16
console.log(obj.processData()); // Output: [2, 4, 6]
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(evens); // Output: [2, 4]
