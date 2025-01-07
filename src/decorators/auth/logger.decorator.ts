export interface LogOptions {
  prefix: string;
  includeTimestamp?: boolean;
}

// Function overloads for better type safety
export function Log(): MethodDecorator;
export function Log(prefix: string): MethodDecorator;
export function Log(options: LogOptions): MethodDecorator;
export function Log(optionsOrPrefix?: string | LogOptions): MethodDecorator {
  const defaultOptions: LogOptions = {
    prefix: "Default",
    includeTimestamp: false
  };

  const options: LogOptions =
    typeof optionsOrPrefix === "string"
      ? { ...defaultOptions, prefix: optionsOrPrefix }
      : { ...defaultOptions, ...(optionsOrPrefix || {}) };

  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const timestamp = options.includeTimestamp
        ? `[${new Date().toISOString()}] `
        : "";
      const methodName = `${options.prefix}.${String(propertyKey)}`;
      console.log(
        `${timestamp}[${methodName}] Called with:`,
        JSON.stringify(args)
      );

      try {
        const result = await originalMethod.apply(this, args);
        console.log(`${timestamp}[${methodName}] Completed successfully`);
        return result;
      } catch (error) {
        console.error(`${timestamp}[${methodName}] Failed:`, error);
        throw error;
      }
    };

    return descriptor;
  };
}
