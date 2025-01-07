/**
 * Decorator to measure the execution time of a method
 *
 */
export function Performance(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const finish = performance.now();
      console.log(`${propertyKey} execution time: ${finish - start}ms`);
      return result;
    };

    return descriptor;
  };
}
