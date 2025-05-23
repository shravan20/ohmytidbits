# JavaScript

Modern JavaScript patterns, ES6+ features, and best practices.

## ES6+ Features

### Arrow Functions
```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With multiple statements
const processData = (data) => {
  const processed = data.map(item => item.value);
  return processed.filter(value => value > 0);
};
```

### Destructuring
```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, ...otherProps } = user;

// Function parameters
const greet = ({ name, age }) => `Hello ${name}, you are ${age} years old`;
```

### Template Literals
```javascript
const name = 'John';
const age = 30;

// Multi-line strings with interpolation
const message = `
  Hello ${name}!
  You are ${age} years old.
  Next year you'll be ${age + 1}.
`;
```

## Async/Await Patterns

### Basic Usage
```javascript
// Async function
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
```

### Parallel Execution
```javascript
// Sequential (slower)
const user = await fetchUser(id);
const posts = await fetchPosts(id);

// Parallel (faster)
const [user, posts] = await Promise.all([
  fetchUser(id),
  fetchPosts(id)
]);
```

## Modern Array Methods

### Map, Filter, Reduce
```javascript
const numbers = [1, 2, 3, 4, 5];

// Transform data
const doubled = numbers.map(n => n * 2);

// Filter data
const evens = numbers.filter(n => n % 2 === 0);

// Aggregate data
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Chaining methods
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
```

## Best Practices

1. **Use const by default**, let when reassignment is needed
2. **Prefer arrow functions** for short, simple functions
3. **Use async/await** instead of Promise chains
4. **Destructure objects and arrays** for cleaner code
5. **Use template literals** for string interpolation

## Common Patterns

### Module Pattern
```javascript
// ES6 modules
export const utils = {
  formatDate: (date) => date.toISOString().split('T')[0],
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1)
};

export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  }
}
```

### Error Handling
```javascript
// Custom error classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Error handling wrapper
const withErrorHandling = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error(`Error in ${fn.name}:`, error);
      throw error;
    }
  };
};
```

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
