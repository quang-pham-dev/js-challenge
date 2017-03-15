// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 1. Global Context
console.log(
  "Global Context",
  this === (typeof window !== "undefined" ? window : global)
); // true in browser, true in Node.js

// 2. Function Context
function regularFunction() {
  console.log("Function Context", this);
}
regularFunction(); // window in non-strict mode, undefined in strict mode

// 3. Method Context
const obj = {
  method: function () {
    console.log("Method Context", this);
  }
};
obj.method(); // obj

// 4. Constructor Context
function Constructor() {
  console.log("Constructor Context", this);
}
const instance = new Constructor(); // instance of Constructor

// 5. Event Handler Context
// document.getElementById('button').addEventListener('click', function() {
//   console.log(this); // the button element
// });

// 6. Arrow Function Context
const arrowFunction = () => {
  console.log("Arrow Function Context", this);
};
arrowFunction(); // Inherits 'this' from the enclosing scope

// 7. Explicit Binding
function explicitThis() {
  console.log("Explicit Binding", this);
}
const context = { name: "Context Object" };
explicitThis.call(context); // context
explicitThis.apply(context); // context
const boundFunction = explicitThis.bind(context);
boundFunction(); // context

// 8. Class Context
class MyClass {
  constructor() {
    this.property = "class property";
  }

  method() {
    console.log("Class Context - Method Context", this);
  }

  arrowMethod = () => {
    console.log("Class Context - Arrow Method Context", this);
  };
}
const myInstance = new MyClass();
myInstance.method(); // myInstance
myInstance.arrowMethod(); // myInstance

// 9. Nested Functions
const outerObj = {
  outerMethod: function () {
    console.log("Nested Functions - Outer:", this);
    function innerFunction() {
      console.log("Nested Functions - Inner:", this);
    }
    innerFunction();
  }
};
outerObj.outerMethod();
// Outer: outerObj
// Inner: window (non-strict) or undefined (strict)

/*
Explanation:
1. Global Context: In a browser, 'this' in the global scope refers to the window object.
2. Function Context: In a regular function, 'this' depends on how the function is called.
3. Method Context: When a function is a method of an object, 'this' refers to the object.
4. Constructor Context: In a constructor function, 'this' refers to the newly created instance.
5. Event Handler Context: In DOM event handlers, 'this' typically refers to the element that triggered the event.
6. Arrow Function Context: Arrow functions don't have their own 'this'. They inherit it from the enclosing scope.
7. Explicit Binding: Methods like call(), apply(), and bind() can explicitly set the value of 'this'.
8. Class Context: In class methods, 'this' refers to the instance of the class.
9. Nested Functions: Inner functions don't inherit 'this' from outer functions unless they're arrow functions.

Key Points:
- The value of 'this' is determined by how a function is called, not where it's defined.
- Arrow functions are an exception; they capture the 'this' value of the enclosing context.
- Use methods like bind(), call(), or apply() to explicitly set 'this'.
- In strict mode, 'this' is undefined in functions called without a context, instead of defaulting to the global object.
*/
