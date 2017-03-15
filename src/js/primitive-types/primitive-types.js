/**
 * According to the ECMAScript specification,
 * JavaScript has six primitive data types: string, number, bigint, boolean, undefined, and symbol.
 * These types are immutable, meaning their values cannot be altered.
 * There is also a special primitive type called null, which represents the intentional absence of any object value.
 *
 * Primitive values are directly assigned to a variable, and when you manipulate a primitive type,
 * you're working directly on the value. Unlike objects, primitives do not have properties or methods,
 * but JavaScript automatically wraps primitive values with object counterparts when necessary
 * (e.g., when calling methods on strings).
 *
 * JavaScript has 7 primitive types:
 * 1. String
 * 2. Number
 * 3. BigInt
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 *
 * This function showcases each primitive type, their characteristics,
 * and some common operations and conversions.
 */
function demonstratePrimitiveTypes() {
  // 1. String
  let str = "Hello, world!";
  console.log("String:", str, "| Type:", typeof str);
  console.log("String length:", str.length);
  console.log("Uppercase:", str.toUpperCase());

  // 2. Number
  let num = 42.5;
  console.log("Number:", num, "| Type:", typeof num);
  console.log("Rounded:", Math.round(num));
  console.log("Is NaN:", Number.isNaN(num));

  // 3. BigInt
  let bigInt = 1234567890123456789012345678901234567890n;
  console.log("BigInt:", bigInt, "| Type:", typeof bigInt);
  console.log("BigInt + 1n:", bigInt + 1n);

  // 4. Boolean
  let bool = true;
  console.log("Boolean:", bool, "| Type:", typeof bool);
  console.log("Negation:", !bool);

  // 5. Undefined
  let undefinedVar;
  console.log("Undefined:", undefinedVar, "| Type:", typeof undefinedVar);

  // 6. Null
  let nullVar = null;
  console.log("Null:", nullVar, "| Type:", typeof nullVar);

  // 7. Symbol
  let symbol = Symbol("unique");
  console.log("Symbol:", symbol.toString(), "| Type:", typeof symbol);
  console.log("Symbol description:", symbol.description);

  // Demonstrating some type conversions
  console.log("String to Number:", Number("42"));
  console.log("Number to String:", String(42));
  console.log("Boolean to String:", String(true));
  console.log("String to Boolean:", Boolean("false")); // Note: Any non-empty string is true

  // Demonstrating type coercion
  console.log("'5' + 3 =", "5" + 3); // String concatenation
  console.log("'5' - 3 =", "5" - 3); // Numeric subtraction
  console.log("'5' * '3' =", "5" * "3"); // Numeric multiplication

  // Demonstrating immutability of primitives
  let original = "hello";
  let modified = original.toUpperCase();
  console.log("Original:", original, "| Modified:", modified);
}

demonstratePrimitiveTypes();
