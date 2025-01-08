# Type Safe Events Challenge 🚀

## Overview

This repository contains a comprehensive exploration of type safe events, demonstrating how to build a robust event system in TypeScript. Events are used to notify other parts of the system about changes, and with type safety, we can ensure that events are handled correctly and efficiently.

## Types of Events Covered

### 1. Event Interface

The event interface defines a contract for all events. It contains the event name and the event data, ensuring type safety across the entire event system.

Example use case:

```typescript
interface Event<T> {
  name: string;
  data: T;
}
```

### 2. Event Emitter

The event emitter is responsible for:

- Broadcasting events to registered listeners
- Managing event subscriptions
- Handling event unsubscription
- Type-safe event dispatching

Example use case:

```typescript
class TypedEventEmitter {
  emit<T>(event: Event<T>): void {
    // Implementation
  }
}
```

### 3. Event Listeners

Event listeners provide type-safe callback handling for:

- Synchronous event processing
- Asynchronous event handling
- Error handling and recovery
- Event filtering and transformation

Example use case:

```typescript
class UserService {
  @OnEvent('user.created')
  handleUserCreated(data: UserCreatedEvent) {
    // Handle user created event
  }
}
```

### 4. Event Decorators

Event decorators enhance the event system with:

- Automatic event registration
- Lifecycle management
- Event metadata handling
- Runtime type checking

Example use case:

```typescript
@EventSubscriber()
class NotificationService {
  @EventListener()
  onMessage(event: MessageEvent) {
    // Process message event
  }
}
```

## Best Practices

### Type Safety
- Always define proper interfaces for event data
- Use generic types to ensure type safety
- Leverage TypeScript's type system for compile-time checks

### Error Handling
- Implement proper error boundaries
- Handle async event failures gracefully
- Provide meaningful error messages

### Performance
- Clean up event listeners when no longer needed
- Avoid memory leaks through proper unsubscription
- Implement event batching for high-frequency events

### Testing
- Write unit tests for event handlers
- Mock event emitters in tests
- Test error scenarios and edge cases

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the tests:
   ```
   npm test
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.