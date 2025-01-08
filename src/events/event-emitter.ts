import {
  ChatEvents,
  EventContext,
  EventHandler,
  EventMiddleware
} from "./types";

export class EventEmitter {
  private handlers = new Map<
    keyof ChatEvents,
    Array<EventHandler<keyof ChatEvents>>
  >();
  private middlewares: EventMiddleware[] = [];

  // Add middleware
  use(middleware: EventMiddleware) {
    this.middlewares.push(middleware);
    return this;
  }

  // Register event handler
  on<T extends keyof ChatEvents>(eventName: T, handler: EventHandler<T>) {
    if (!this.handlers.has(eventName)) {
      this.handlers.set(eventName, []);
    }
    this.handlers
      .get(eventName)!
      .push(handler as EventHandler<keyof ChatEvents>);
    return this;
  }

  // Remove event handler
  off<T extends keyof ChatEvents>(eventName: T, handler: EventHandler<T>) {
    const handlers = this.handlers.get(eventName);
    if (handlers) {
      const index = handlers.indexOf(handler as EventHandler<keyof ChatEvents>);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
    return this;
  }

  // Emit event
  async emit<T extends keyof ChatEvents>(eventName: T, data: ChatEvents[T]) {
    const context: EventContext<ChatEvents[T]> = {
      eventName,
      data,
      timestamp: Date.now(),
      canceled: false
    };

    // Run middlewares
    try {
      await this.runMiddlewares(context);
    } catch (error) {
      console.error("Middleware error:", error);
      return;
    }

    // If event was canceled by middleware, stop processing
    if (context.canceled) {
      return;
    }

    // Execute handlers
    const handlers = this.handlers.get(eventName) || [];
    for (const handler of handlers) {
      try {
        await handler(data, context as any);
      } catch (error) {
        console.error(`Handler error for ${eventName}:`, error);
      }
    }
  }

  private async runMiddlewares(context: EventContext<any>) {
    let index = 0;

    const next = async (): Promise<void> => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index++];
        await middleware(context, next);
      }
    };

    await next();
  }
}
