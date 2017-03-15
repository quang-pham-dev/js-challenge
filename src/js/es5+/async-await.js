const MOCK_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Demonstrates comprehensive async/await usage with proper error handling
 * @param {string} url - The URL to fetch data from
 * @returns {Promise<object>} The parsed JSON data
 */
async function fetchDataWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw to allow calling code to handle
  }
}

/**
 * Example usage of the fetchDataWithErrorHandling function
 */
async function main() {
  try {
    const result = await fetchDataWithErrorHandling(MOCK_BASE_URL);
    console.log("Fetched data:", result);
  } catch (error) {
    console.error("Main function error:", error);
    // Handle error (e.g., show user-friendly message, retry, etc.)
  }
}

// Execute the main function
main();

/**
 * Demonstrates parallel execution of multiple async operations
 * @param {string[]} urls - An array of URLs to fetch data from
 * @returns {Promise<object[]>} An array of parsed JSON data
 */
async function fetchMultipleUrls(urls) {
  try {
    const promises = urls.map((url) => fetchDataWithErrorHandling(url));
    const results = await Promise.all(promises);
    return results;
    /**
     * try with promise.allSettled
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
     */
  } catch (error) {
    console.error("Error fetching multiple URLs:", error);
    throw error;
  }
}

/**
 * Demonstrates sequential execution of async operations
 * @param {function[]} asyncFunctions - An array of async functions to execute
 * @returns {Promise<any[]>} An array of results from each function
 */
async function executeSequentially(asyncFunctions) {
  const results = [];
  for (const fn of asyncFunctions) {
    try {
      const result = await fn();
      results.push(result);
    } catch (error) {
      console.error("Error in sequential execution:", error);
      results.push(null); // Or handle error as needed
    }
  }
  return results;
}

// Example usage
const urls = [`${MOCK_BASE_URL}/posts/1`, `${MOCK_BASE_URL}/posts/2`];
fetchMultipleUrls(urls)
  .then((data) => console.log("Multiple URL data:", data))
  .catch((error) => console.error("Failed to fetch multiple URLs:", error));

const asyncFunctions = [
  () => fetchDataWithErrorHandling(`${MOCK_BASE_URL}/users/1`),
  () => fetchDataWithErrorHandling(`${MOCK_BASE_URL}/users/2`),
  () => fetchDataWithErrorHandling(`${MOCK_BASE_URL}/users/3`)
];
executeSequentially(asyncFunctions)
  .then((results) => console.log("Sequential execution results:", results))
  .catch((error) => console.error("Sequential execution failed:", error));
