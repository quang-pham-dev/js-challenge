// Prototype in JavaScript Demonstration

/**
 * Person constructor function
 * @param {string} name - The person's name
 * @param {number} age - The person's age
 */
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
}

/**
 * Greeting method added to Person prototype
 * This method will be shared by all instances of Person
 */
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

/**
 * Static method on Person constructor
 * This method is available on the constructor itself, not instances
 */
Person.createAnonymous = function () {
  return new Person("Anonymous", 0);
};

// Create instances of Person
const quang = new Person("Quang", 30);
const jane = new Person("Jane", 25);

// Both instances can use the greet method
quang.greet(); // Output: Hello, my name is Quang and I'm 30 years old.
jane.greet(); // Output: Hello, my name is Jane and I'm 25 years old.

// Demonstrate prototype chain
console.log(quang.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Extend prototype at runtime
Person.prototype.introduce = function () {
  console.log(`I'm ${this.name}, nice to meet you!`);
};

quang.introduce(); // Output: I'm Quang, nice to meet you!

// Create a subclass using Object.create for prototype inheritance
function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.position}.`);
};

const alice = new Employee("Alice", 28, "Developer");
alice.greet(); // Inherited from Person
alice.work(); // Specific to Employee

// Demonstrate the prototype chain for the subclass
console.log(alice.__proto__ === Employee.prototype); // true
console.log(Employee.prototype.__proto__ === Person.prototype); // true

/**
 * This example demonstrates:
 * 1. Constructor functions and the 'new' keyword
 * 2. Adding methods to the prototype
 * 3. Prototype chain and inheritance
 * 4. Runtime modification of prototypes
 * 5. Creating subclasses with Object.create
 * 6. Method overriding and extension in subclasses
 *
 * Key points:
 * - Prototypes allow efficient memory usage by sharing methods across instances
 * - The prototype chain enables inheritance in JavaScript
 * - Objects inherit properties and methods from their prototype
 * - The __proto__ property points to the prototype of an object
 * - Modifying a prototype affects all existing and future instances
 * - Subclassing can be achieved using Object.create and constructor stealing
 */
