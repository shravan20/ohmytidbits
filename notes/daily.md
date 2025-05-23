# Daily Notes

Quick insights, discoveries, and learning moments from day-to-day development work.

## Recent Entries

### 2024-01-15 - React Server Components
Learned about React Server Components and how they differ from client components:
- Server components run on the server and can directly access databases
- They don't have access to browser APIs or state
- Can reduce bundle size by keeping heavy dependencies on the server
- Use `'use client'` directive to mark client components

```jsx
// Server Component (default)
async function UserProfile({ userId }) {
  const user = await db.user.findById(userId); // Direct DB access
  return <div>{user.name}</div>;
}

// Client Component
'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2024-01-14 - TypeScript Utility Types
Discovered some powerful TypeScript utility types:

```typescript
// ReturnType - extract return type of function
type ApiResponse = ReturnType<typeof fetchUserData>;

// Parameters - extract parameter types
type FetchParams = Parameters<typeof fetchUserData>;

// Awaited - unwrap Promise type
type UserData = Awaited<ReturnType<typeof fetchUserData>>;
```

### 2024-01-13 - Git Worktree
Found `git worktree` for working on multiple branches simultaneously:
```bash
# Create new worktree for feature branch
git worktree add ../feature-branch feature/new-feature

# List all worktrees
git worktree list

# Remove worktree
git worktree remove ../feature-branch
```

### 2024-01-12 - CSS Container Queries
Container queries are now widely supported! Great for component-based responsive design:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
```

### 2024-01-11 - Node.js Performance
Learned about `--inspect` flag for debugging Node.js performance:
```bash
node --inspect --inspect-brk app.js
# Then open chrome://inspect in Chrome
```

Also discovered `clinic.js` for performance profiling:
```bash
npm install -g clinic
clinic doctor -- node app.js
```

### 2024-01-10 - VS Code Tips
Useful VS Code shortcuts I keep forgetting:
- `Ctrl+Shift+P` - Command palette
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search across files
- `Alt+Click` - Multiple cursors
- `Ctrl+D` - Select next occurrence

### 2024-01-09 - JavaScript Array Methods
Rediscovered `Array.from()` with mapping function:
```javascript
// Create array of numbers 1-10
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// Convert NodeList to array with transformation
const texts = Array.from(
  document.querySelectorAll('p'), 
  el => el.textContent
);
```

## Learning Patterns

### Problem-Solution Format
When I encounter a problem, I try to document:
1. **Context**: What was I trying to do?
2. **Problem**: What went wrong?
3. **Solution**: How did I fix it?
4. **Lesson**: What did I learn?

### Code Snippets
I save useful code patterns with:
- Brief explanation of what it does
- When to use it
- Any gotchas or limitations

### Resource Links
When I find helpful articles or tools, I note:
- Link to the resource
- Key takeaways
- How it applies to my work

## Tags

Common tags I use:
- `#javascript` `#typescript` `#react` `#nodejs`
- `#css` `#html` `#performance` `#accessibility`
- `#git` `#vscode` `#debugging` `#testing`
- `#til` (Today I Learned)
- `#gotcha` (Common pitfalls)
- `#pattern` (Useful code patterns)
