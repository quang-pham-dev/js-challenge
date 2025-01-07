import "reflect-metadata";

export interface User {
  id: string;
  roles: string[];
}

export interface AuthContext {
  user?: User;
}

const AUTH_KEY = "auth:required";
const ROLES_KEY = "auth:roles";

export function Auth(roles: string[] = []) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata(AUTH_KEY, true, target, propertyKey);
    Reflect.defineMetadata(ROLES_KEY, roles, target, propertyKey);

    const originalMethod = descriptor.value;

    descriptor.value = function (context: AuthContext, ...args: any[]) {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      if (
        roles.length > 0 &&
        !roles.some((role) => context.user!.roles.includes(role))
      ) {
        throw new Error("Insufficient permissions");
      }

      return originalMethod.apply(this, [context, ...args]);
    };

    return descriptor;
  };
}
