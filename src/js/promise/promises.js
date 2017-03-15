// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise basics
// A Promise represents a value that may not be available immediately.
// It can be in one of three states: pending, fulfilled, or rejected.
const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Success!"); // Fulfills the promise
    } else {
      reject("Error: Number too low"); // Rejects the promise
    }
  }, 1000);
});

// Handling promise resolution or rejection
simplePromise
  .then((result) => console.log("simplePromise", result)) // Handles fulfillment
  .catch((error) => console.error("simplePromise", error)) // Handles rejection
  .finally(() => console.log("Promise settled")); // Executes regardless of outcome

// Chaining promises
// Promises can be chained, allowing sequential asynchronous operations
const chainedPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log("chainedPromise", result); // Logs 1
    return result * 2; // Returns 2 to the next .then()
  })
  .then((result) => {
    console.log("chainedPromise", result); // Logs 2
    return result * 2; // Returns 4 to the next .then()
  })
  .then((result) => {
    console.log("chainedPromise", result); // Logs 4
  });

// Promise.all
// Waits for all promises to resolve, or for any to reject
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise.all"), 100)
);
const promise3 = 42;

Promise.all([promise1, promise2, promise3]).then(
  (values) => console.log("promise.all", values) // Logs [3, "foo", 42]
);

// Promise.allSettled
// Waits for all promises to resolve or reject
const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise.allSettled"), 100)
);
const promise6 = 42;

Promise.allSettled([promise4, promise5, promise6]).then(
  (values) => console.log("promise.allSettled", values) // Logs [{status: "fulfilled", value: 3}, {status: "fulfilled", value: "foo"}, {status: "fulfilled", value: 42}]
);

// Promise.race
// Resolves or rejects as soon as one of the promises settles
const race1 = new Promise((resolve) => setTimeout(() => resolve("one"), 400));
const race2 = new Promise((resolve) => setTimeout(() => resolve("two"), 200));
const race3 = new Promise((resolve) => setTimeout(() => resolve("three"), 100));

Promise.race([race1, race2, race3]).then((value) =>
  console.log("promise.race", value)
); // Logs "three"

// Async/Await
// Provides a more synchronous-looking syntax for working with promises
async function asyncFunction() {
  try {
    const result = await simplePromise; // Waits for promise to settle
    console.log("async/await", result);
  } catch (error) {
    console.error("async/await", error); // Handles any errors thrown in the try block
  }
}

asyncFunction();
const newProm = new Promise((resolve, reject) => {
  try {
    resolve("Success");
  } catch (e) {
    reject("Error");
  }
})
  .then((result) => {
    console.log("Promise", result);
  })
  .catch((error) => {
    console.log("Promise", error);
  });
