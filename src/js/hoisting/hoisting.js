// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// Hoisting Example

// Function Declaration Hoisting
console.log(greet("Quang Pham")); // Outputs: "Hello, Quang Pham!"

function greet(name) {
    return `Hello, ${name}!`;
}

// Variable Hoisting
console.log(x); // Outputs: undefined
var x = 5;

// Let and Const (Temporal Dead Zone)
// console.log(y); // Throws ReferenceError open to test
let y = 10;

/*
Hoisting Explanation:

1. Function Declarations:
   - Fully hoisted to the top of their scope.
   - Can be called before they appear in the code.

2. var Variables:
   - Declaration is hoisted, but not the initialization.
   - Accessing before declaration returns 'undefined'.

3. let and const:
   - Hoisted but not initialized (Temporal Dead Zone).
   - Accessing before declaration throws ReferenceError.

4. Function Expressions:
   - Not hoisted if assigned to variables.
   - Behave like variable declarations.

Best Practice:
- Declare variables at the top of their scope.
- Use let/const instead of var to avoid hoisting issues.
- Define functions before using them for clearer code.
*/
