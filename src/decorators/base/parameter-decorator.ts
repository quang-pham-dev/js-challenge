/**
 * Ensures a parameter is not set to null or undefined
 * @param target{any} target object
 * @param propertyKey{string} property key
 * @param parameterIndex{number} parameter index
 */
export function Validate(target: any, propertyKey: string, parameterIndex: number) {
  const validateParams = Reflect.getMetadata("validate", target, propertyKey) || [];
  validateParams.push(parameterIndex);
  Reflect.defineMetadata("validate", validateParams, target, propertyKey);
}

/**
 * Ensures a parameter is not set to null or undefined
 * @param target{any} target object
 * @param propertyKey{string} property key
 */
export function ValidateParameters() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const validateParams: number[] = Reflect.getMetadata("validate", target, propertyKey) || [];
      
      validateParams.forEach(index => {
        if (args[index] === undefined || args[index] === null) {
          throw new Error(`Parameter at index ${index} in ${propertyKey} is required`);
        }
      });

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}