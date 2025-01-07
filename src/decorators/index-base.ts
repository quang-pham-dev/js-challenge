import "reflect-metadata";
import { UserService } from "./base/user.service";

// Test decorators
try {
  console.log("Creating new UserService...");
  const userService = new UserService("John");

  console.log("\nTesting greeting method...");
  console.log(userService.greeting("Alice"));

  console.log("\nTesting with invalid parameter...");
  console.log(userService.greeting(null as any));
} catch (error) {
  console.error("\nError:", (error as Error).message);
}
