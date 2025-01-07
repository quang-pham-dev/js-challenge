import { Performance } from "./method-decorator";
import { Validate, ValidateParameters } from "./parameter-decorator";
import { Logger } from "./class-decorator";
import { Required } from "./property-decorator";

@Logger("[UserService]")
export class UserService {
  @Required
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Performance()
  @ValidateParameters()
  public greeting(@Validate name: string) {
    // Simulate delay for performance testing
    const start = Date.now();
    while (Date.now() - start < 1000) {}
    return `Hello, ${name}!`;
  }
}
