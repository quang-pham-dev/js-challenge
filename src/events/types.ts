// Event type definitions
export interface ChatEvents {
  "message:sent": {
    id: string;
    content: string;
    senderId: string;
    timestamp: number;
  };
  "message:deleted": {
    id: string;
    senderId: string;
  };
  "user:joined": {
    userId: string;
    username: string;
  };
  "user:left": {
    userId: string;
  };
}

// Middleware types
export type NextFunction = () => Promise<void> | void;
export type EventContext<T> = {
  eventName: keyof ChatEvents;
  data: T;
  timestamp: number;
  canceled: boolean;
};

export type EventMiddleware = <T extends keyof ChatEvents>(
  context: EventContext<ChatEvents[T]>,
  next: NextFunction
) => Promise<void> | void;

export type EventHandler<T extends keyof ChatEvents> = (
  data: ChatEvents[T],
  context: EventContext<ChatEvents[T]>
) => Promise<void> | void;
