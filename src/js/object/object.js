// Object Methods in JavaScript
// https://onecompiler.com/javascript

// 1. Object.create(): Creates a new object with the specified prototype object and properties
const person = {
  isDeveloper: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I developer? ${this.isDeveloper}`);
  }
};

const me = Object.create(person);
me.name = "Quang Pham";
me.isDeveloper = true;
me.printIntroduction(); // Output: My name is Quang Pham. Am I developer? true

// 2. Object.keys(): Returns an array of a given object's own enumerable property names
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']

// 3. Object.values(): Returns an array of a given object's own enumerable property values
console.log(Object.values(obj)); // Output: [1, 2, 3]

// 4. Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]

// 5. Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }

// 6. Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being modified or deleted
const obj2 = { prop: 42 };
Object.freeze(obj2);
obj2.prop = 33; // Attempt to change property
console.log(obj2.prop); // Output: 42 (unchanged)

// 7. Object.seal(): Seals an object, preventing new properties from being added and marking all existing properties as non-configurable
const obj3 = { prop: 42 };
Object.seal(obj3);
obj3.prop = 33; // Can still change existing properties
obj3.newProp = "new"; // Cannot add new properties
console.log(obj3); // Output: { prop: 33 }

// 8. Object.is(): Determines whether two values are the same value
console.log(Object.is("foo", "foo")); // Output: true
console.log(Object.is([], [])); // Output: false (different objects)
console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true

// 9. Object.getOwnPropertyNames(): Returns an array of all properties (enumerable or not) found directly in a given object
const obj4 = Object.create({}, { 
  getFoo: { value: function() { return this.foo; } } 
});
obj4.foo = 1;
console.log(Object.getOwnPropertyNames(obj4)); // Output: ["foo", "getFoo"]

// 10. Object.defineProperty(): Adds the named property described by a given descriptor to an object
const obj5 = {};
Object.defineProperty(obj5, 'property1', {
  value: 42,
  writable: false
});
obj5.property1 = 77; // Throws an error in strict mode
console.log(obj5.property1); // Output: 42

// 11. Object.getPrototypeOf(): Returns the prototype of the specified object
const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); // Output: true

// 12. Object.setPrototypeOf(): Sets the prototype of a specified object to another object or null
const obj6 = { a: 1 };
const proto = { b: 2 };
Object.setPrototypeOf(obj6, proto);
console.log(obj6.b); // Output: 2

// 13. Object.hasOwnProperty(): Determines whether an object has a property with the specified name
const obj7 = { prop: 'exists' };
console.log(obj7.hasOwnProperty('prop')); // Output: true
console.log(obj7.hasOwnProperty('toString')); // Output: false

// 14. Object.preventExtensions(): Prevents new properties from being added to an object
const obj8 = { prop: 42 };
Object.preventExtensions(obj8);
obj8.newProp = 50; // Attempt to add new property
console.log(obj8.newProp); // Output: undefined

// 15. Object.fromEntries(): Transforms a list of key-value pairs into an object
const entries = [['foo', 'bar'], ['baz', 42]];
const obj9 = Object.fromEntries(entries);
console.log(obj9); // Output: { foo: "bar", baz: 42 }

/*
Explanation:
1. Object.create(): Useful for implementing inheritance.
2. Object.keys(): Helpful when you need to iterate over object properties.
3. Object.values(): Useful when you need to work with all values in an object.
4. Object.entries(): Handy for converting objects to arrays and vice versa.
5. Object.assign(): Commonly used for shallow copying or merging objects.
6. Object.freeze(): Ensures that an object cannot be modified, useful for creating constants.
7. Object.seal(): Prevents adding new properties but allows modifying existing ones.
8. Object.is(): Provides a way to check for equality that's slightly different from ===.
9. Object.getOwnPropertyNames(): Useful for getting all properties of an object, including non-enumerable ones.
10. Object.defineProperty(): Allows fine-grained control over property attributes.
11. Object.getPrototypeOf(): Helps in inspecting the prototype chain.
12. Object.setPrototypeOf(): Enables dynamic manipulation of an object's prototype.
13. Object.hasOwnProperty(): Useful for checking if a property is directly on the object and not inherited.
14. Object.preventExtensions(): Prevents adding new properties but allows modifying or deleting existing ones.
15. Object.fromEntries(): The inverse of Object.entries(), converting an array of key-value pairs into an object.

These methods provide a comprehensive toolkit for working with objects in JavaScript,
offering ways to create, modify, inspect, and protect objects and their properties.
*/
