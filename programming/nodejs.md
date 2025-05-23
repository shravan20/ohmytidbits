# Node.js

Server-side JavaScript development with Node.js, including best practices and common patterns.

## Getting Started

### Basic Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Express.js Setup
```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## File System Operations

### Reading Files
```javascript
const fs = require('fs').promises;
const path = require('path');

// Async/await
async function readFile(filename) {
  try {
    const data = await fs.readFile(path.join(__dirname, filename), 'utf8');
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

// Stream for large files
const fs = require('fs');
const readline = require('readline');

async function processLargeFile(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(line);
  }
}
```

## Environment Configuration

### Environment Variables
```javascript
// .env file
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key

// Using dotenv
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
};
```

## Error Handling

### Global Error Handler
```javascript
// Express error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  res.status(500).json({ error: 'Internal Server Error' });
});

// Unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
```

## Database Integration

### MongoDB with Mongoose
```javascript
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// CRUD operations
async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

async function findUsers(query = {}) {
  return await User.find(query);
}
```

## Testing

### Jest Setup
```javascript
// user.test.js
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /users should return users', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);
    
    expect(response.body).toHaveProperty('users');
  });
  
  test('POST /users should create user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201);
    
    expect(response.body.user.name).toBe(userData.name);
  });
});
```

## Best Practices

1. **Use async/await** instead of callbacks
2. **Handle errors properly** with try/catch
3. **Use environment variables** for configuration
4. **Implement proper logging** with libraries like Winston
5. **Use middleware** for common functionality
6. **Validate input data** with libraries like Joi
7. **Use clustering** for production deployments

## Performance Tips

- Use connection pooling for databases
- Implement caching with Redis
- Use compression middleware
- Optimize database queries
- Use PM2 for process management

## Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
