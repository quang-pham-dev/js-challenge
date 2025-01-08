import { EventEmitter } from "./event-emitter";
import {
  loggingMiddleware,
  validationMiddleware,
  rateLimitMiddleware
} from "./middlewares";
import { ChatEvents } from "./types";

export class ChatService {
  private events = new EventEmitter();

  constructor() {
    // Setup middlewares
    this.events
      .use(loggingMiddleware)
      .use(validationMiddleware)
      .use(rateLimitMiddleware);

    // Setup event handlers
    this.setupEventHandlers();
  }

  private setupEventHandlers() {
    // Handle message sent
    this.events.on("message:sent", async (data) => {
      console.log("Processing new message:", data.content);
      // Add your message handling logic here
    });

    // Handle user joined
    this.events.on("user:joined", async (data) => {
      console.log("User joined:", data.username);
      // Add your user joined logic here
    });
  }

  // Public methods to interact with the chat
  async sendMessage(content: string, senderId: string): Promise<void> {
    await this.events.emit("message:sent", {
      id: Math.random().toString(36).substr(2, 9),
      content,
      senderId,
      timestamp: Date.now()
    });
  }

  async userJoin(userId: string, username: string): Promise<void> {
    await this.events.emit("user:joined", {
      userId,
      username
    });
  }

  async userLeave(userId: string): Promise<void> {
    await this.events.emit("user:left", {
      userId
    });
  }
}
