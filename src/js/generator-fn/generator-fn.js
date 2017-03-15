// Generator Functions in JavaScript

/**
 * Generator functions are special functions that can be paused and resumed,
 * allowing for the generation of a sequence of values over time.
 * They are defined using the function* syntax and use the yield keyword
 * to pause execution and return a value.
 */

// Basic Generator
function* simpleGenerator() {
    yield 'First';
    yield 'Second';
    yield 'Third';
}

const gen = simpleGenerator();
console.log(gen.next().value); // 'First'
console.log(gen.next().value); // 'Second'
console.log(gen.next().value); // 'Third'
console.log(gen.next().done);  // true

/**
 * Explanation:
 * - The function* syntax defines a generator function.
 * - yield pauses the function and returns a value.
 * - next() resumes the generator, returning {value, done}.
 * - done is true when the generator is finished.
 */

// Infinite Sequence Generator
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteGen = infiniteSequence();
console.log(infiniteGen.next().value); // 0
console.log(infiniteGen.next().value); // 1

/**
 * Use Case: Generating unique IDs
 * Practical for creating sequential, unique identifiers.
 */

// Fibonacci Sequence Generator
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2

/**
 * Use Case: Mathematical Sequences
 * Efficient for generating mathematical sequences on-demand.
 */

// Async Generator
async function* asyncGenerator() {
    yield await Promise.resolve('Async 1');
    yield await Promise.resolve('Async 2');
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();

/**
 * Use Case: Handling Asynchronous Data Streams
 * Useful for processing streams of data from APIs or databases.
 */

// Generator with Error Handling
function* errorHandlingGenerator() {
    try {
        yield 'Start';
        throw new Error('Generator Error');
    } catch (e) {
        yield `Caught: ${e.message}`;
    }
    yield 'End';
}

const errorGen = errorHandlingGenerator();
console.log(errorGen.next().value); // 'Start'
console.log(errorGen.next().value); // 'Caught: Generator Error'
console.log(errorGen.next().value); // 'End'

/**
 * Use Case: Robust Data Processing
 * Allows for graceful error handling in data generation scenarios.
 */

// Generator Delegation
function* delegatingGenerator() {
    yield 'Delegating Start';
    yield* simpleGenerator();
    yield 'Delegating End';
}

const delegateGen = delegatingGenerator();
console.log(delegateGen.next().value); // 'Delegating Start'
console.log(delegateGen.next().value); // 'First'
console.log(delegateGen.next().value); // 'Second'

/**
 * Use Case: Composing Generators
 * Useful for creating complex sequences from simpler generators.
 */

/**
 * Key benefits of generator functions:
 * 1. Lazy Evaluation: Values are generated only when requested, saving memory.
 * 2. State Management: Maintain internal state between yields, simplifying complex logic.
 * 3. Asynchronous Programming: Simplify async code flows, making them appear more synchronous.
 * 4. Iterables: Work seamlessly with for...of loops and spread operators.
 * 5. Memory Efficiency: Ideal for working with large or infinite data sets.
 * 6. Custom Iterables: Easy creation of custom iterable objects.
 */
