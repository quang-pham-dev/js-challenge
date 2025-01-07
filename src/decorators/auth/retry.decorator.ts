interface RetryOptions {
  maxAttempts: number;
  delay: number;
}

export function Retry(options: RetryOptions = { maxAttempts: 3, delay: 1000 }) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      let attempts = 0;

      while (attempts < options.maxAttempts) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          attempts++;
          console.log(
            `[Retry] Attempt ${attempts}/${options.maxAttempts} failed for ${propertyKey}`
          );

          if (attempts === options.maxAttempts) {
            throw error;
          }

          await new Promise((resolve) => setTimeout(resolve, options.delay));
        }
      }
    };

    return descriptor;
  };
}
