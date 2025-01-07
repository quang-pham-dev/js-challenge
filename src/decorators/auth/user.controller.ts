import { Auth, AuthContext } from "./auth.decorator";
import { Log } from "./logger.decorator";
import { Measure } from "./measure.decorator";
import { Retry } from "./retry.decorator";


export class UserController {
  @Auth(["admin"])
  @Measure()
  @Log("UserController")
  @Retry({ maxAttempts: 3, delay: 1000 })
  async createUser(context: AuthContext, userData: any) {
    // Simulate API call
    if (Math.random() < 0.5) {
      throw new Error("Random failure");
    }
    return { id: "123", ...userData };
  }

  @Auth(["user", "admin"])
  @Measure()
  @Log()
  async getUser(context: AuthContext, userId: string) {
    return { id: userId, name: "John Doe" };
  }
}
