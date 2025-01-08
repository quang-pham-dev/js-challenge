# TypeScript Decorators Challenge 🚀

## Overview

This repository contains a comprehensive exploration of TypeScript decorators, demonstrating their powerful capabilities in modern TypeScript development. Decorators provide a way to add both annotations and metadata to existing code in a clean and declarative manner.

## Types of Decorators Covered

### 1. Class Decorators

Class decorators allow you to observe, modify, or replace class definitions. They are declared just before class declarations and can be used to:

- Modify class construction behavior
- Add new properties or methods
- Implement logging or tracking
- Apply design patterns systematically

Example use case:

```typescript
@injectable()
@singleton()
class UserService {
  // Service implementation
}
```

### 2. Method Decorators

Method decorators are applied to methods within a class, enabling you to:

- Monitor, modify, or replace method definitions
- Add validation logic
- Implement caching
- Handle logging and performance monitoring
- Add authorization checks

Example use case:

```typescript
class TaskController {
  @log()
  @validate()
  public async createTask(task: Task) {
    // Method implementation
  }
}
```

### 3. Property Decorators

Property decorators help you intercept property definitions and are useful for:

- Implementing validation rules
- Adding computed properties
- Setting up automatic serialization
- Managing observables

Example use case:

```typescript
class User {
  @required()
  @minLength(3)
  public username: string;
}
```

### 4. Parameter Decorators

Parameter decorators allow you to decorate parameters in method declarations, perfect for:

- Dependency injection
- Parameter validation
- Parameter transformation
- Custom binding behavior

Example use case:

```typescript
class UserController {
  public getUser(@param() id: string) {
    // Method implementation
  }
}
```

### 5. Authentication Decorators

Authentication decorators provide a clean way to implement security in your API endpoints:

- Role-based access control
- JWT validation
- Session management
- Custom authorization rules

Example use case:

```typescript
class SecureController {
  @authenticate()
  @roles(["admin"])
  public sensitiveOperation() {
    // Secure operation implementation
  }
}
```

Project Structure

```bash
src/
├── decorators/
│ ├── base/
│ ├── auth/
│ ├── .../
├── examples/
└── tests/
```

Getting Started

1. Clone the repository: `git clone https://github.com/quangphamdev/js-challenge.git`

2. Install dependencies: `npm install`