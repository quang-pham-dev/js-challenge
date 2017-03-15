/**
 * Symbol in JavaScript
 *
 * Symbols are a primitive data type introduced in ES6 (ES2015).
 * They are unique and immutable, primarily used as object property keys.
 *
 * Key features of Symbols:
 * 1. Uniqueness: Each Symbol() call creates a new unique symbol.
 * 2. Privacy: Symbols are not enumerable in for...in loops.
 * 3. Well-known Symbols: Predefined symbols used by JavaScript internals.
 * 4. Global Symbol Registry: Allows creation of shared symbols across realms.
 */

// Creating a symbol
const mySymbol = Symbol("description");
console.log(typeof mySymbol); // Output: "symbol"

// Uniqueness demonstration
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2); // Output: false

// Using symbols as object keys
const obj = {
  [Symbol("name")]: "Quang Pham",
  [Symbol("age")]: 30
};
console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(name), Symbol(age)]

// Global Symbol Registry
const globalSym = Symbol.for("sharedSymbol");
const sameGlobalSym = Symbol.for("sharedSymbol");
console.log(globalSym === sameGlobalSym); // Output: true

// Well-known Symbol example
const iterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};
console.log([...iterable]); // Output: [1, 2, 3]

/**
 * Symbol Use Cases:
 * 1. Private object properties
 * 2. Preventing property name collisions in objects
 * 3. Defining special object behaviors (like iterable)
 * 4. Creating non-string property keys
 */

// Example: Using Symbol for private property
const privateProperty = Symbol("private");
class MyClass {
  constructor() {
    this[privateProperty] = "This is private";
  }
  getPrivateProperty() {
    return this[privateProperty];
  }
}

const instance = new MyClass();
console.log(instance.getPrivateProperty()); // Output: "This is private"
console.log(instance[privateProperty]); // Output: undefined (not accessible directly)
