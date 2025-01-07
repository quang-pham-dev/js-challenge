import { UserController } from "./auth/user.controller";

async function test() {
  const controller = new UserController();

  // Test with authenticated admin
  const adminContext = {
    user: { id: "1", roles: ["admin"] }
  };

  try {
    console.log("\nTesting createUser with admin:");
    const newUser = await controller.createUser(adminContext, {
      name: "Alice"
    });
    console.log("User created:", newUser);
  } catch (error: any) {
    console.error("Create user error:", error.message);
  }

  // Test with regular user (should fail for createUser)
  const userContext = {
    user: { id: "2", roles: ["user"] }
  };

  try {
    console.log("\nTesting createUser with regular user (should fail):");
    await controller.createUser(userContext, { name: "Bob" });
  } catch (error: any) {
    console.error("Expected error:", error.message);
  }

  // Test getUser (should work for both admin and regular user)
  try {
    console.log("\nTesting getUser with regular user:");
    const user = await controller.getUser(userContext, "123");
    console.log("User retrieved:", user);
  } catch (error: any) {
    console.error("Get user error:", error.message);
  }
}

test();
