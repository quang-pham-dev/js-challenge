/**
 * Array Methods Demonstration
 * This code showcases various array methods in JavaScript with explanations.
 */

// Sample array for demonstration
const fruits = ["apple", "banana", "orange", "grape", "mango"];

/**
 * 1. forEach: Executes a provided function once for each array element.
 */
console.log("1. forEach:");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

/**
 * 2. map: Creates a new array with the results of calling a provided function on every element.
 */
console.log("\n2. map:");
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

/**
 * 3. filter: Creates a new array with all elements that pass the test implemented by the provided function.
 */
console.log("\n3. filter:");
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);

/**
 * 4. reduce: Executes a reducer function on each element of the array, resulting in a single output value.
 */
console.log("\n4. reduce:");
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(`Total length of all fruits: ${totalLength}`);

/**
 * 5. find: Returns the value of the first element in the array that satisfies the provided testing function.
 */
console.log("\n5. find:");
const firstLongFruit = fruits.find((fruit) => fruit.length > 5);
console.log(`First fruit with more than 5 characters: ${firstLongFruit}`);

/**
 * 6. findIndex: Returns the index of the first element in the array that satisfies the provided testing function.
 */
console.log("\n6. findIndex:");
const indexOfLongFruit = fruits.findIndex((fruit) => fruit.length > 5);
console.log(
  `Index of first fruit with more than 5 characters: ${indexOfLongFruit}`
);

/**
 * 7. some: Tests whether at least one element in the array passes the test implemented by the provided function.
 */
console.log("\n7. some:");
const hasLongFruit = fruits.some((fruit) => fruit.length > 5);
console.log(
  `Has at least one fruit with more than 5 characters: ${hasLongFruit}`
);

/**
 * 8. every: Tests whether all elements in the array pass the test implemented by the provided function.
 */
console.log("\n8. every:");
const allLongFruits = fruits.every((fruit) => fruit.length > 3);
console.log(`All fruits have more than 3 characters: ${allLongFruits}`);

/**
 * 9. includes: Determines whether an array includes a certain value among its entries.
 */
console.log("\n9. includes:");
console.log(`Array includes 'banana': ${fruits.includes("banana")}`);

/**
 * 10. indexOf: Returns the first index at which a given element can be found in the array.
 */
console.log("\n10. indexOf:");
console.log(`Index of 'orange': ${fruits.indexOf("orange")}`);

/**
 * 11. lastIndexOf: Returns the last index at which a given element can be found in the array.
 */
console.log("\n11. lastIndexOf:");
const repeatedFruits = ["apple", "banana", "orange", "banana", "grape"];
console.log(`Last index of 'banana': ${repeatedFruits.lastIndexOf("banana")}`);

/**
 * 12. concat: Merges two or more arrays.
 */
console.log("\n12. concat:");
const moreFruits = ["kiwi", "pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

/**
 * 13. slice: Returns a shallow copy of a portion of an array.
 */
console.log("\n13. slice:");
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

/**
 * 14. splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 */
console.log("\n14. splice:");
const splicedFruits = [...fruits]; // Create a copy to avoid modifying the original array
splicedFruits.splice(2, 1, "lemon", "lime");
console.log(splicedFruits);

/**
 * 15. reverse: Reverses an array in place.
 */
console.log("\n15. reverse:");
const reversedFruits = [...fruits].reverse();
console.log(reversedFruits);

/**
 * 16. sort: Sorts the elements of an array in place and returns the sorted array.
 */
console.log("\n16. sort:");
const sortedFruits = [...fruits].sort();
console.log(sortedFruits);

/**
 * 17. join: Joins all elements of an array into a string.
 */
console.log("\n17. join:");
const fruitString = fruits.join(", ");
console.log(fruitString);

/**
 * 18. push: Adds one or more elements to the end of an array and returns the new length of the array.
 */
console.log("\n18. push:");
const newLength = fruits.push("strawberry");
console.log(`New array length: ${newLength}`);
console.log(fruits);

/**
 * 19. pop: Removes the last element from an array and returns that element.
 */
console.log("\n19. pop:");
const lastFruit = fruits.pop();
console.log(`Removed fruit: ${lastFruit}`);
console.log(fruits);

/**
 * 20. unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
 */
console.log("\n20. unshift:");
const newLengthUnshift = fruits.unshift("cherry");
console.log(`New array length: ${newLengthUnshift}`);
console.log(fruits);

/**
 * 21. shift: Removes the first element from an array and returns that removed element.
 */
console.log("\n21. shift:");
const firstFruit = fruits.shift();
console.log(`Removed fruit: ${firstFruit}`);
console.log(fruits);

/**
 * 22. fill: Fills all the elements of an array from a start index to an end index with a static value.
 */
console.log("\n22. fill:");
const filledArray = new Array(5).fill("apple");
console.log(filledArray);

/**
 * 23. flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
console.log("\n23. flat:");
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2));

/**
 * 24. flatMap: Maps each element using a mapping function, then flattens the result into a new array.
 */
console.log("\n24. flatMap:");
const sentences = ["It's a nice day", "The sun is shining"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words);

/**
 * 25. from: Creates a new, shallow-copied Array instance from an array-like or iterable object.
 */
console.log("\n25. from:");
const arrayFromString = Array.from("Hello");
console.log(arrayFromString);

/**
 * 26. isArray: Determines whether the passed value is an Array.
 */
console.log("\n26. isArray:");
console.log(`Is fruits an array? ${Array.isArray(fruits)}`);
console.log(`Is 'apple' an array? ${Array.isArray("apple")}`);

/**
 * 27. of: Creates a new Array instance with a variable number of arguments, regardless of number or types of the arguments.
 */
console.log("\n27. of:");
const arrayOf = Array.of(1, "two", 3, true);
console.log(arrayOf);

/**
 * 28. keys: Returns a new Array Iterator object that contains the keys for each index in the array.
 */
console.log("\n28. keys:");
const fruitKeys = fruits.keys();
for (const key of fruitKeys) {
  console.log(key);
}

/**
 * 29. values: Returns a new Array Iterator object that contains the values for each index in the array.
 */
console.log("\n29. values:");
const fruitValues = fruits.values();
for (const value of fruitValues) {
  console.log(value);
}
