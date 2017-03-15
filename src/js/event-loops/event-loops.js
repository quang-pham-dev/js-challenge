// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// Event Loop in JavaScript

// 1. Synchronous execution
console.log('1. Start');

// 2.1 setTimeout (Macrotask)
setTimeout(() => {
    console.log('2.1 Timeout callback');
}, 100);

// 2.2 setTimeout (Macrotask)
setTimeout(() => {
    console.log('2.2 Timeout callback');
}, 0);

// 3. Promise (Microtask)
Promise.resolve().then(() => {
    console.log('3. Promise resolved');
});

// 4. process.nextTick (Node.js specific, highest priority microtask)
process.nextTick(() => {
    console.log('4. Next tick');
});

// 5. setImmediate (Node.js specific, check phase of event loop)
setImmediate(() => {
    console.log('5. Immediate callback');
});

// 6. I/O operation (e.g., file reading)
const fs = require('fs');
fs.readFile('example.txt', () => {
    console.log('6. File read callback');
});

console.log('7. End');

/*
Explanation:

1. The event loop starts with synchronous code execution. '1. Start' and '7. End' are logged immediately.

2. Two setTimeout calls are scheduled:
   - One with a 100ms delay (2.1)
   - One with a 0ms delay (2.2)
   Both are macrotasks and will be queued in the timer queue.

3. Promise.resolve().then() creates a microtask. Microtasks have higher priority than macrotasks.

4. process.nextTick() is Node.js specific and creates the highest priority microtask.

5. setImmediate() is Node.js specific and runs in the check phase of the event loop.

6. File reading is an asynchronous I/O operation. Its callback is executed when the I/O is complete.

Execution order:
1. Synchronous code runs first: '1. Start' and '7. End' are logged.
2. The event loop checks for microtasks:
   - process.nextTick callback runs first (highest priority): '4. Next tick'
   - Promise callback runs next: '3. Promise resolved'
3. The event loop moves to the timer phase:
   - setTimeout callback with 0ms delay executes: '2.2 Timeout callback'
   - The 100ms setTimeout is not yet ready
4. The event loop reaches the I/O phase:
   - File read callback executes (assuming file reading is complete): '6. File read callback'
5. The event loop reaches the check phase:
   - setImmediate callback runs: '5. Immediate callback'
6. After at least 100ms, in a subsequent iteration of the event loop:
   - The 100ms setTimeout callback executes: '2.1 Timeout callback'

This example demonstrates how JavaScript handles asynchronous operations using the event loop,
showcasing the differences between macrotasks with varying delays, microtasks, and I/O operations.
The order of execution for setTimeout callbacks depends on their specified delays.
*/
