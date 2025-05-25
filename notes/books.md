# Book Notes

Key takeaways and insights from technical and professional development books.

## Currently Reading

### "Clean Code" by Robert C. Martin

**Progress**: Chapter 5 - Formatting

**Key Takeaways So Far**:

- Functions should be small and do one thing well
- Use descriptive names that reveal intent
- Avoid mental mapping - code should be self-documenting
- The Boy Scout Rule: Leave code cleaner than you found it

**Favorite Quote**:
> "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines."

## Completed Books

### "You Don't Know JS" Series by Kyle Simpson

**Rating**: ⭐⭐⭐⭐⭐

**Key Concepts**:

- **Scope & Closures**: Understanding lexical scope and how closures work
- **this & Object Prototypes**: How `this` binding works in different contexts
- **Types & Grammar**: JavaScript's type system and coercion rules
- **Async & Performance**: Promises, async/await, and performance optimization

**Practical Applications**:

```javascript
// Understanding closure
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

// this binding
const obj = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
```

### "Effective TypeScript" by Dan Vanderkam

**Rating**: ⭐⭐⭐⭐⭐

**Best Practices Learned**:

1. Prefer type annotations for function signatures
2. Use readonly for arrays and objects when possible
3. Understand the difference between type and interface
4. Use branded types for better type safety

```typescript
// Branded types example
type UserId = string & { __brand: 'UserId' };
type ProductId = string & { __brand: 'ProductId' };

function getUser(id: UserId) { /* ... */ }
function getProduct(id: ProductId) { /* ... */ }
```

### "The Pragmatic Programmer" by David Thomas & Andrew Hunt

**Rating**: ⭐⭐⭐⭐⭐

**Key Principles**:

- **DRY (Don't Repeat Yourself)**: Every piece of knowledge should have a single representation
- **Orthogonality**: Design components that don't depend on each other
- **Reversibility**: Make decisions that can be easily changed
- **Tracer Bullets**: Build end-to-end functionality early

**Actionable Advice**:

- Keep a learning log (like this wiki!)
- Invest regularly in your knowledge portfolio
- Use version control for everything
- Test early, test often, test automatically

### "Atomic Habits" by James Clear

**Rating**: ⭐⭐⭐⭐⭐

**Applied to Programming**:

- **1% Better Daily**: Small improvements in coding practices compound
- **Habit Stacking**: Link new learning to existing routines
- **Environment Design**: Set up development environment for success
- **Identity-Based Habits**: "I am a developer who writes clean code"

**Implementation**:

- Daily code review of my own work
- Weekly learning goals (new concept/tool)
- Monthly reflection on progress
- Quarterly skill assessment

## Reading List

### Next Up

- [ ] "System Design Interview" by Alex Xu
- [ ] "Designing Data-Intensive Applications" by Martin Kleppmann
- [ ] "The Clean Coder" by Robert C. Martin

### Backlog

- [ ] "Refactoring" by Martin Fowler
- [ ] "Domain-Driven Design" by Eric Evans
- [ ] "Building Microservices" by Sam Newman
- [ ] "Site Reliability Engineering" by Google

## Note-Taking System

### While Reading

- Highlight key concepts and code examples
- Write questions in margins for later research
- Create mind maps for complex topics
- Practice code examples in real projects

### After Reading

- Summarize main takeaways
- Identify actionable items
- Update personal coding standards
- Share insights with team/community

### Review Process

- Monthly review of notes
- Quarterly assessment of applied concepts
- Annual re-reading of foundational books

## Book Recommendations by Topic

### JavaScript/TypeScript

- "You Don't Know JS" series
- "Effective TypeScript"
- "JavaScript: The Good Parts"

### Software Architecture

- "Clean Architecture"
- "Building Microservices"
- "Designing Data-Intensive Applications"

### Career Development

- "The Pragmatic Programmer"
- "The Clean Coder"
- "Soft Skills" by John Sonmez

### Productivity

- "Atomic Habits"
- "Deep Work" by Cal Newport
- "Getting Things Done" by David Allen
