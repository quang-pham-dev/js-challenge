import { EventMiddleware } from "./types";

// Logging middleware
export const loggingMiddleware: EventMiddleware = async (context, next) => {
  console.log(`[${context.eventName}] Before:`, context.data);
  await next();
  console.log(`[${context.eventName}] After:`, context.data);
};

// Validation middleware
export const validationMiddleware: EventMiddleware = async (context, next) => {
  if (context.eventName === "message:sent") {
    const { content } = context.data as any;
    if (!content || content.trim().length === 0) {
      context.canceled = true;
      throw new Error("Message content cannot be empty");
    }
  }
  await next();
};

// Rate limiting middleware
export const rateLimitMiddleware: EventMiddleware = (() => {
  const limits = new Map<string, number[]>();
  const WINDOW_MS = 60000; // 1 minute
  const MAX_EVENTS = 100;

  return async (context, next) => {
    const key = `${context.eventName}`;
    const now = Date.now();
    const timestamps = limits.get(key) || [];

    // Remove old timestamps
    const validTimestamps = timestamps.filter((t) => now - t < WINDOW_MS);

    if (validTimestamps.length >= MAX_EVENTS) {
      context.canceled = true;
      throw new Error("Rate limit exceeded");
    }

    validTimestamps.push(now);
    limits.set(key, validTimestamps);

    await next();
  };
})();
