// Enhanced Object Literals in JavaScript

// 1. Shorthand property names
const name = "Alice";
const age = 30;
const user = { name, age };
console.log("1. Shorthand property names:", user);
// Output: { name: 'Alice', age: 30 }

// 2. Computed property names
const propName = "dynamicProp";
const obj = {
  [propName]: "Dynamic value",
  [`computed${propName}`]: "Another dynamic value"
};
console.log("2. Computed property names:", obj);
// Output: { dynamicProp: 'Dynamic value', computeddynamicProp: 'Another dynamic value' }

// 3. Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log("3. Method shorthand - add:", calculator.add(5, 3));
console.log("3. Method shorthand - subtract:", calculator.subtract(10, 4));
// Output: 8
// Output: 6

// 4. Object property spreading
const defaults = { theme: "dark", fontSize: 14 };
const userPreferences = { fontSize: 16 };
const mergedPreferences = { ...defaults, ...userPreferences };
console.log("4. Object property spreading:", mergedPreferences);
// Output: { theme: 'dark', fontSize: 16 }

// 5. Object destructuring in function parameters
function printUserInfo({ name, age, email = "N/A" }) {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}
printUserInfo({ name: "Bob", age: 25 });
// Output: Name: Bob, Age: 25, Email: N/A

// 6. Combining techniques
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const person = {
  firstName: "Quang",
  lastName: "Pham",
  [Symbol.for("id")]: 12345,
  getFullName() {
    return getFullName(this.firstName, this.lastName);
  }
};
console.log("6. Combining techniques:", person.getFullName());
console.log("6. Symbol property:", person[Symbol.for("id")]);
// Output: Quang Pham
// Output: 12345

/*
Best Practices:
1. Use shorthand syntax when variable names match property names for cleaner code.
2. Leverage computed property names for dynamic key creation.
3. Utilize method shorthand for cleaner and more concise object methods.
4. Use the spread operator for shallow object merging and cloning.
5. Employ destructuring in function parameters for cleaner function signatures.
6. Combine techniques to create expressive and maintainable object literals.
7. Use symbols for unique property keys when appropriate.
8. Be consistent with your syntax choices throughout your codebase.
9. Consider using Object.freeze() for immutable objects when needed.
10. Use Object.assign() or the spread operator for creating new objects with modifications.
*/
