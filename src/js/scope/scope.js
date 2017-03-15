// https://developer.mozilla.org/en-US/docs/Glossary/Scope
/**
 * The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
 * If a variable or expression is not in the current scope, it will not be available for use.
 * Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice vers
 */

// Explanations:
// 1. Global: Declared outside any function, accessible everywhere.
// 2. Function: Declared inside a function, only accessible within that function.
// 3. Block: Using 'let' or 'const' inside a block, only accessible within that block.
// 4. Lexical: Inner functions can access variables from their outer scope.
// 5. Module: Variables in a module are scoped to that module unless exported.
(function () {
  "use strict";
  var a = ((typeof window !== "undefined" ? window : global).b = 5);
})();

console.log(b);

// JavaScript has the following kinds of scopes:

// Global scope
var globalVar = "I'm global";
console.log("Global scope", globalVar); // Accessible everywhere

// Function scope
function functionScope() {
  var functionVar = "I'm function-scoped";
  console.log("Function scope", functionVar); // Accessible only inside this function
}

// Block scope (ES6+)
{
  let blockVar = "I'm block-scoped";
  console.log("Block scope", blockVar); // Accessible only within this block
}

// Lexical scope
function outer() {
  var outerVar = "I'm in outer function";
  function inner() {
    console.log("Lexical scope", outerVar); // Can access outerVar due to lexical scoping
  }
  inner();
}

// Invoke
functionScope();
outer();

// Module scope (assuming this is in a module)
const moduleVar = "I'm module-scoped";
// When using export { moduleVar } change scope.js to scope.mjs
// export { moduleVar }; // Accessible only if explicitly exported

var name = "Quang";
var obj = {
  name: "Upwork",
  prop: {
    name: "Restulmind",
    getName: function () {
      return this.name;
    }
  }
};

console.log(obj.prop.getName()); // Outputs: Restulmind

var test = obj.prop.getName;
var test2 = obj.prop.getName;

// Ensure 'name' is a property of the global object in Node.js
if (typeof global !== "undefined") {
  global.name = name;
}

console.log(test()); // Now outputs: Quang in both browser and Node.js
console.log(test2.bind(obj)()); // Now outputs: Upwork in both browser and Node.js

function b() {
  console.log(text);
}
 
function a() {
  var text = "in a";
  b();
}
 
a();
var text = "in global";

// Explanation:
/**
 * When this code runs, it outputs "undefined". Here's why:
 * 
 * 1. Function 'a' is called, which defines a local variable 'text' as "in a".
 * 2. Inside 'a', function 'b' is called.
 * 3. Function 'b' tries to log 'text', but it doesn't have its own 'text' variable.
 * 4. Due to lexical scoping, 'b' looks for 'text' in its outer scope, which is the global scope.
 * 5. At the moment 'b' is executed, the global 'text' variable is declared but not yet initialized.
 * 6. In JavaScript, variable declarations are hoisted, but not initializations.
 * 7. Therefore, when 'b' accesses 'text', it exists in the global scope but has the value 'undefined'.
 * 8. The local 'text' in function 'a' doesn't affect 'b' because 'b' doesn't have access to 'a's scope.
 * 9. The global 'text' is initialized after 'a()' is called, so it doesn't affect the output.
 * 
 * This demonstrates the importance of understanding variable scope and hoisting in JavaScript.
 */

// Explanation:
// We add 'name' to the global object in Node.js environment.
// This mimics the behavior in browsers where 'var' declarations
// in the global scope become properties of the global object (window).
// Now, when 'test()' is called, it will find 'name' on the global object
// in both browser and Node.js environments.
