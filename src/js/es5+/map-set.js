/**
 * Map and Set in JavaScript
 *
 * This module demonstrates the usage and benefits of Map and Set data structures in JavaScript.
 * These structures provide efficient ways to store and manipulate collections of data.
 */

// Map: A collection of key-value pairs where both the keys and values can be of any type
const userMap = new Map();

/**
 * Adds a new user to the map
 * @param {number} id - The user's unique identifier
 * @param {Object} userData - The user's data
 */
function addUser(id, userData) {
  userMap.set(id, userData);
}

/**
 * Retrieves a user from the map
 * @param {number} id - The user's unique identifier
 * @returns {Object|undefined} The user's data or undefined if not found
 */
function getUser(id) {
  return userMap.get(id);
}

/**
 * Removes a user from the map
 * @param {number} id - The user's unique identifier
 * @returns {boolean} True if the user was removed, false otherwise
 */
function removeUser(id) {
  return userMap.delete(id);
}

// Example usage of Map
addUser(1, { name: "Alice", age: 30 });
addUser(2, { name: "Bob", age: 25 });
console.log(getUser(1)); // { name: 'Alice', age: 30 }
console.log(userMap.size); // 2
removeUser(2);
console.log(userMap.size); // 1

// Set: A collection of unique values of any type
const uniqueNumbers = new Set();

/**
 * Adds a number to the set if it doesn't already exist
 * @param {number} num - The number to add
 * @returns {boolean} True if the number was added, false if it already existed
 */
function addUniqueNumber(num) {
  const initialSize = uniqueNumbers.size;
  uniqueNumbers.add(num);
  return uniqueNumbers.size > initialSize;
}

/**
 * Checks if a number exists in the set
 * @param {number} num - The number to check
 * @returns {boolean} True if the number exists, false otherwise
 */
function hasNumber(num) {
  return uniqueNumbers.has(num);
}

/**
 * Removes a number from the set
 * @param {number} num - The number to remove
 * @returns {boolean} True if the number was removed, false otherwise
 */
function removeNumber(num) {
  return uniqueNumbers.delete(num);
}

// Example usage of Set
console.log(addUniqueNumber(5)); // true
console.log(addUniqueNumber(5)); // false (already exists)
console.log(hasNumber(5)); // true
console.log(uniqueNumbers.size); // 1
removeNumber(5);
console.log(uniqueNumbers.size); // 0

/**
 * Map vs Object:
 * - Maps allow keys of any type, while object keys are always strings or symbols
 * - Maps maintain key order, objects do not (except for integer keys)
 * - Maps are iterable, objects require Object.entries() for iteration
 * - Maps have a size property, objects require Object.keys().length
 * - Maps perform better for frequent additions and removals
 *
 * Set vs Array:
 * - Sets only store unique values, arrays can have duplicates
 * - Sets have efficient has() method for checking existence
 * - Sets automatically handle uniqueness, saving manual duplicate checking
 * - Sets are not index-based like arrays
 * - Sets are iterable and work well with spread operator and destructuring
 */
