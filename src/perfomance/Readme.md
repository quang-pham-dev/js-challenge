# Array-Set Performance

This repository contains a collection of JavaScript and TypeScript challenges designed to explore and demonstrate advanced concepts and patterns in modern JS/TS development.

## Challenges

### 1. Array - Set performance

[Details](src/perfomance/Readme.md)

### Getting Started

1. Clone the repository
2. Install dependencies:
  ```bash
  npm install
  ```
3. Navigate to specific challenge directories to learn more about each topic.

# Array vs Set Performance Challenge 

## Overview

This challenge demonstrates and compares the performance characteristics of JavaScript Arrays and Sets when performing lookup operations. The test specifically focuses on measuring the time taken to search for elements in both data structures with a large dataset.

## Implementation Details

### Test Parameters
- Dataset size: 3,000,000 elements
- Operation tested: Element lookup (`includes` for Array, `has` for Set)
- Performance measurement: Using `performance.now()`

### Test Cases

#### 1. Array Performance Test
```typescript
const arr = new Array(ARRAY_LENGTH).fill(0).map((_item, index) => index);
// Test includes() operation for each element
```

#### 2. Set Performance Test
```typescript
const set = new Set(new Array(LENGTH).fill(0).map((_item, index) => index));
// Test has() operation for each element
```

## Key Concepts Demonstrated

### 1. Time Complexity
- Array.includes(): O(n) - Linear time complexity
- Set.has(): O(1) - Constant time complexity

### 2. Performance Implications
- Arrays perform linear searches, checking each element sequentially
- Sets use hash-based lookup, providing constant-time access
- Performance difference becomes more pronounced with larger datasets

## Best Practices

### When to Use Arrays
- When maintaining order is important
- When you need index-based access
- When the dataset is small
- When you need duplicate elements

### When to Use Sets
- When you need unique values
- When frequent lookups are required
- When working with large datasets
- When order is not important

## Running the Tests

1. Navigate to the performance directory
2. Run the array test:
   ```bash
   ts-node array.ts
   ```
3. Run the set test:
   ```bash
   ts-node set.ts
   ```

## Expected Results

You will see the execution time for both data structures printed to the console. The Set implementation is expected to perform significantly faster due to its O(1) lookup time complexity.

## Learning Outcomes

- Understanding time complexity differences between Arrays and Sets
- Practical experience with performance measurement in JavaScript
- Knowledge of when to choose each data structure based on use case

## Contributing

Feel free to add more test cases or improve the existing ones. Make sure to:
1. Maintain consistent testing parameters
2. Document any changes or additions
3. Include performance results for different scenarios

## License

This challenge is part of the JavaScript/TypeScript challenges collection and is available under the MIT License.