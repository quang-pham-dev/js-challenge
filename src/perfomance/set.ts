const LENGTH = 3000000;

const set = new Set(new Array(LENGTH).fill(0).map((_item, index) => index));

const startSet = performance.now();

for (let i = 0; i < LENGTH; i++) {
  set.has(i);
}

const endSet = performance.now();
console.log(`Time to find ${LENGTH} elements in set: ${endSet - startSet}ms`);
