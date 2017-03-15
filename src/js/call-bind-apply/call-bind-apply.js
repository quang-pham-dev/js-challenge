/**
 * Demonstrates the usage of call(), bind(), and apply() methods in JavaScript.
 * These methods allow us to explicitly set the 'this' context for function execution.
 *
 * call(): Invokes a function with a given this value and arguments provided individually.
 * apply(): Similar to call(), but arguments are passed as an array.
 * bind(): Creates a new function with a fixed this value, regardless of how it's called.
 */

// Example object
const person = {
  fullName: function(city, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
  }
};

// Using call()
const person1 = { firstName: "John", lastName: "Doe" };
person.fullName.call(person1, "New York", "USA");

// Using apply()
const person2 = { firstName: "Jane", lastName: "Smith" };
person.fullName.apply(person2, ["London", "UK"]);

// Using bind()
const person3 = { firstName: "Alice", lastName: "Johnson" };
const boundFunction = person.fullName.bind(person3);
boundFunction("Paris", "France");

// Explanation:
// 1. call() allows us to call a function with a given this value and arguments provided individually.
// 2. apply() is similar to call(), but it takes arguments as an array.
// 3. bind() creates a new function with a fixed this value, which can be invoked later.

// These methods are particularly useful for:
// - Borrowing methods from other objects
// - Setting the context for callback functions
// - Creating partial functions with preset arguments
