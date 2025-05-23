# Course Notes

Notes and key takeaways from online courses, workshops, and training programs.

## Completed Courses

### "Advanced React Patterns" - Kent C. Dodds
**Platform**: Epic React  
**Completed**: December 2023  
**Rating**: ⭐⭐⭐⭐⭐

**Key Patterns Learned**:

#### Compound Components
```jsx
function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  
  return React.Children.map(children, child =>
    React.cloneElement(child, { on, toggle })
  );
}

function ToggleOn({ on, children }) {
  return on ? children : null;
}

function ToggleButton({ on, toggle }) {
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}

// Usage
<Toggle>
  <ToggleOn>The button is on!</ToggleOn>
  <ToggleButton />
</Toggle>
```

#### Render Props
```jsx
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return children({ data, loading });
}

// Usage
<DataFetcher url="/api/users">
  {({ data, loading }) => 
    loading ? <Spinner /> : <UserList users={data} />
  }
</DataFetcher>
```

#### Custom Hooks
```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  return { value, toggle, setTrue, setFalse };
}
```

### "TypeScript Fundamentals" - Frontend Masters
**Instructor**: Mike North  
**Completed**: November 2023  
**Rating**: ⭐⭐⭐⭐

**Key Concepts**:
- Type narrowing and type guards
- Advanced generics and conditional types
- Module augmentation
- Declaration merging

```typescript
// Type guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Conditional types
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// Mapped types
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

### "Node.js Performance Optimization" - Udemy
**Instructor**: Mosh Hamedani  
**Completed**: October 2023  
**Rating**: ⭐⭐⭐⭐

**Performance Techniques**:
- Clustering with PM2
- Memory leak detection
- Database query optimization
- Caching strategies with Redis

```javascript
// Clustering example
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./app.js');
}
```

## Currently Taking

### "System Design Interview Prep" - Educative
**Progress**: 60% complete  
**Focus Areas**:
- Scalability patterns
- Database design
- Caching strategies
- Load balancing

**Notes So Far**:
- CAP theorem: Consistency, Availability, Partition tolerance
- Horizontal vs vertical scaling trade-offs
- Database sharding strategies
- CDN implementation patterns

## Workshops Attended

### React Conf 2023 - Virtual
**Key Sessions**:
- "React Server Components Deep Dive"
- "Performance Optimization Techniques"
- "Testing Strategies for Modern React"

**Takeaways**:
- Server components can significantly reduce bundle size
- Use React DevTools Profiler for performance debugging
- Testing Library best practices for component testing

### JavaScript Conference 2023
**Favorite Talks**:
- "The Future of JavaScript" - TC39 updates
- "Web Performance in 2023" - Core Web Vitals
- "Building Accessible Web Apps" - ARIA best practices

## Learning Goals 2024

### Q1 Goals
- [ ] Complete "System Design Interview Prep"
- [ ] Take "Advanced CSS Grid and Flexbox" course
- [ ] Attend local React meetup monthly

### Q2 Goals
- [ ] "Kubernetes for Developers" certification
- [ ] "GraphQL with Apollo" deep dive
- [ ] Conference speaking (submit CFP)

### Q3 Goals
- [ ] "Machine Learning for Web Developers"
- [ ] "Advanced Git Workflows" workshop
- [ ] Mentor junior developer

### Q4 Goals
- [ ] "Leadership for Tech Leads" course
- [ ] "Product Management for Engineers"
- [ ] Year-end skill assessment

## Course Evaluation Criteria

When choosing courses, I consider:
- **Instructor credibility**: Industry experience and teaching ability
- **Hands-on projects**: Practical application of concepts
- **Community**: Access to forums and peer interaction
- **Currency**: Up-to-date content and best practices
- **Depth**: Comprehensive coverage vs. surface-level overview

## Study Techniques

### Active Learning
- Take notes in my own words
- Build projects alongside course content
- Explain concepts to others (rubber duck debugging)
- Create flashcards for key concepts

### Spaced Repetition
- Review notes weekly
- Practice coding exercises monthly
- Revisit complex topics quarterly
- Apply concepts in real projects

### Community Engagement
- Join course Discord/Slack channels
- Participate in study groups
- Share progress on social media
- Write blog posts about learnings

## Certification Tracking

### Completed
- ✅ AWS Certified Developer Associate (2023)
- ✅ Google Analytics Certified (2022)

### In Progress
- 🔄 Kubernetes Application Developer (CKAD)

### Planned
- 📅 AWS Solutions Architect Associate (Q2 2024)
- 📅 MongoDB Certified Developer (Q3 2024)
