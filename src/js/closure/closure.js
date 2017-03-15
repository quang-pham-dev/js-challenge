// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Closure in JavaScript
// 1. Basic Closure
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const getCounter = counter();
console.log("Basic Closure", getCounter()); // 1
console.log("Basic Closure", getCounter()); // 2

// 2. Closure with Parameters
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log("Closure with Parameters", double(5)); // 10

// 3. Closure in Loops
const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log("Closure in Loops", i);
  });
}
funcs.forEach((func) => func()); // 0, 1, 2

// 4. Closure for Private Variables
function createPerson(name) {
  let age;
  return {
    setAge: function (newAge) {
      if (newAge > 0) age = newAge;
    },
    getAge: function () {
      return age;
    },
    getName: function () {
      return name;
    }
  };
}

const person = createPerson("John");
person.setAge(30);
console.log("Closure for Private Variables", person.getName(), person.getAge()); // John 30

// 5. Closure in Module Pattern
const myModule = (function () {
  let privateVar = 0;
  function privateFunction() {
    console.log("Private function");
  }
  return {
    publicMethod: function () {
      privateVar++;
      privateFunction();
      console.log("Closure in Module Pattern", privateVar);
    }
  };
})();

myModule.publicMethod(); // Private function, 1

// 6. Closure for Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveFunction = memoize(function (n) {
  console.log("Computing...");
  return n * 2;
});

console.log(expensiveFunction(5)); // Computing... 10
console.log(expensiveFunction(5)); // 10 (cached)

const createSecret = (secret) => {
  return {
    getSecret: () => secret, // get secret from closure
    setSecret: (newSecret) => (secret = newSecret) // set secret from closure
  };
};

const secret = createSecret("My secret"); // execute createSecret
// CLosure variable are live reference to the outer scope variable, not the copy
console.log("Secret", secret.getSecret()); // My secret
secret.setSecret("New secret");
console.log("Secret", secret.getSecret()); // New secret

// Common use cases for closures: Data privacy, Currying and partial applications, Sharing data with event handlers and callbacks
// Data privacy
// Closures in JavaScript allow you to declare private variables for objects
const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
};

const counterCreator = createCounter();
console.log("Data privacy", counterCreator.increment()); // 1
console.log("Data privacy", counterCreator.getCount()); // 1
console.log("Data privacy", counterCreator.decrement()); // 0
console.log("Data privacy", counterCreator.getCount()); // 0

// 7. Closure for Currying
function currying(fn) {
  let args = [];
  return function (a) {
    args.push(a);
    if (args.length === fn.length) {
      return fn.apply(this, args);
    } else {
      return arguments.callee;
    }
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = currying(sum);
console.log("Currying", curriedSum(1)(2)(3)); // 6

// 8. Closure for Partial Application
function partial(fn, ...args) {
  return function (...moreArgs) {
    return fn.call(this, ...args, ...moreArgs);
  };
}

console.log("Partial", partial(sum, 1, 2)(3)); // 6

// A curried function takes multiple arguments one at a time.
const add = (a) => (b) => a + b;

// A partial application is a function that has been applied to some,
// but not yet all of its arguments.
const increment = add(1); // partial application

console.log("Partial Application", increment(2)); // 3

/*
Closure Explanation:
1. Basic Closure: The inner function has access to the 'count' variable in its outer scope, creating a closure.
2. Closure with Parameters: The inner function closes over the 'factor' parameter of the outer function.
3. Closure in Loops: Using 'let' creates a new binding for each iteration, allowing each function to close over a different 'i'.
4. Closure for Private Variables: The returned object's methods have access to the private 'age' variable.
5. Module Pattern: The IIFE creates a closure, allowing the returned object to access private variables and functions.
6. Memoization: The inner function closes over the 'cache' object, preserving it between function calls.

Key Points:
- Closures allow functions to access variables from their outer scope even after the outer function has returned.
- They are useful for data privacy, creating function factories, and implementing the module pattern.
- Closures can lead to unexpected behavior in loops if not handled correctly (use 'let' instead of 'var').
- They can be used for advanced techniques like memoization to optimize performance.
*/
