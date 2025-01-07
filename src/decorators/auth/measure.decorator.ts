export function Measure() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const result = await originalMethod.apply(this, args);
      const end = performance.now();

      console.log(
        `[Performance] ${propertyKey} took ${(end - start).toFixed(2)}ms`
      );
      return result;
    };

    return descriptor;
  };
}
