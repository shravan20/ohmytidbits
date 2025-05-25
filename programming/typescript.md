# TypeScript

TypeScript adds static type checking to JavaScript, helping catch errors early and improving code maintainability.

## Basic Types

### Primitive Types

```typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let data: any = { foo: "bar" };

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuples
let person: [string, number] = ["John", 30];
```

### Object Types

```typescript
// Interface
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

// Type alias
type Status = "pending" | "approved" | "rejected";

// Function types
type Handler = (event: Event) => void;
```

## Advanced Types

### Generics

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Repository<T> {
  findById(id: string): Promise<T>;
  save(entity: T): Promise<T>;
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

### Utility Types

```typescript
// Partial - makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>; // All properties optional

// Pick - select specific properties
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit - exclude specific properties
type CreateUser = Omit<User, 'id'>;

// Record - create object type with specific keys
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
```

## Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Best Practices

1. **Enable strict mode** for better type safety
2. **Use interfaces for object shapes** and types for unions
3. **Prefer type assertions over any** when necessary
4. **Use generic constraints** to limit type parameters
5. **Leverage utility types** for common transformations

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
