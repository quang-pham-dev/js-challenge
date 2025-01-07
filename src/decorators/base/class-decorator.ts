/**
 * Logs the creation of class instances
 * 
 * @param prefix{string} to add to log messages
 */
export function Logger(prefix: string) {
  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    const newConstructor: any = function (...args: any[]) {
      console.log(`${prefix} Creating new instance...`);
      const instance = new constructor(...args);
      console.log(`${prefix} Instance created`);
      return instance;
    };

    // Copy prototype
    newConstructor.prototype = constructor.prototype;

    return newConstructor;
  };
}
