const ARRAY_LENGTH = 3000000;

const arr = new Array(ARRAY_LENGTH).fill(0).map((_item, index) => index);
const start = performance.now();

for (let i = 0; i < ARRAY_LENGTH; i++) {
  arr.includes(i);
}

const end = performance.now();
console.log(`Time to find ${ARRAY_LENGTH} elements in array: ${end - start}ms`);
