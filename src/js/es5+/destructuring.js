/**
 * Destructuring in JavaScript
 *
 * Destructuring is a powerful feature that allows us to extract values from arrays
 * or properties from objects into distinct variables. It provides a concise way to
 * unpack values from arrays or properties from objects.
 *
 * Key aspects of destructuring:
 * 1. Array Destructuring
 * 2. Object Destructuring
 * 3. Default Values
 * 4. Rest Pattern
 * 5. Nested Destructuring
 */

// 1. Array Destructuring
const colors = ["red", "green", "blue"];
// depending on the index
const [primaryColor, secondaryColor, tertiaryColor] = colors;
console.log(
  "1. Array Destructuring: ",
  primaryColor,
  secondaryColor,
  tertiaryColor
); // red green blue

// Skipping elements
const [, , lastColor] = colors;
console.log("2. Skipping elements: ", lastColor); // blue

// 2. Object Destructuring
const user = { name: "Quang Pham", age: 30, occupation: "Developer" };
const { name, age } = user;
console.log("2. Object Destructuring: ", name, age); // Quang Pham 30

// Renaming variables
const { name: userName, occupation: job } = user;
console.log("2. Renaming variables: ", userName, job); // Quang Pham Developer

// 3. Default Values
const { country = "Unknown" } = user;
console.log("3. Default Values: ", country); // Unknown

// 4. Rest Pattern
const [first, ...rest] = colors;
console.log("4. Rest Pattern: ", first, rest); // red ['green', 'blue']

const { name: fullName, ...userDetails } = user;
console.log("4. Rest Pattern: ", fullName, userDetails); // Quang Pham { age: 30, occupation: 'Developer' }

// 5. Nested Destructuring
const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "TechCity",
    country: "TechLand"
  }
};

const {
  name: companyName,
  address: { city }
} = company;
console.log("5. Nested Destructuring: ", companyName, city); // TechCorp TechCity

// Function parameter destructuring
function printUserInfo({ name, age, occupation = "Not specified" }) {
  console.log(`Name: ${name}, Age: ${age}, Occupation: ${occupation}`);
}

printUserInfo(user); // Name: Quang Pham, Age: 30, Occupation: Developer

// Combining array and object destructuring
const [{ name: firstUserName }] = [user];
console.log("6. Combining array and object destructuring: ", firstUserName); // Quang Pham

// Destructuring in loops
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

for (const { id, name } of users) {
  console.log(`ID: ${id}, Name: ${name}`);
}
// ID: 1, Name: Alice
// ID: 2, Name: Bob
// ID: 3, Name: Charlie
