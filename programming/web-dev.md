# Web Development

Modern web development practices, HTML, CSS, and frontend technologies.

## HTML Best Practices

### Semantic HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Article content...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 Company Name</p>
  </footer>
</body>
</html>
```

### Accessibility

```html
<!-- ARIA labels -->
<button aria-label="Close dialog">×</button>

<!-- Form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" required>

<!-- Image alt text -->
<img src="chart.png" alt="Sales increased 25% from 2023 to 2024">

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## CSS Modern Techniques

### CSS Grid

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}
```

### Flexbox

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.flex-item {
  flex: 1;
  min-width: 0; /* Prevents overflow */
}
```

### CSS Custom Properties

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 1rem;
  --spacing-unit: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
}
```

## Responsive Design

### Mobile-First Approach

```css
/* Base styles for mobile */
.container {
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}
```

### Container Queries

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
}
```

## Modern JavaScript for Web

### DOM Manipulation

```javascript
// Modern DOM selection
const elements = document.querySelectorAll('.item');
const element = document.querySelector('#main');

// Event delegation
document.addEventListener('click', (event) => {
  if (event.target.matches('.button')) {
    handleButtonClick(event.target);
  }
});

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadContent(entry.target);
    }
  });
});

document.querySelectorAll('.lazy-load').forEach(el => {
  observer.observe(el);
});
```

### Fetch API

```javascript
// GET request
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// POST request
async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

## Performance Optimization

### Critical CSS

```html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold styles */
  body { font-family: Arial, sans-serif; }
  .header { background: #333; color: white; }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Image Optimization

```html
<!-- Responsive images -->
<picture>
  <source media="(min-width: 800px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 400px)" srcset="medium.webp" type="image/webp">
  <img src="small.jpg" alt="Description" loading="lazy">
</picture>

<!-- Modern image formats -->
<img src="image.jpg" 
     srcset="image-400.webp 400w, image-800.webp 800w"
     sizes="(max-width: 400px) 400px, 800px"
     alt="Description">
```

## Build Tools

### Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
```

## Best Practices

### HTML

- Use semantic elements
- Include proper meta tags
- Optimize for accessibility
- Validate markup

### CSS

- Use mobile-first responsive design
- Implement CSS custom properties
- Follow BEM naming convention
- Optimize for performance

### JavaScript

- Use modern ES6+ features
- Implement proper error handling
- Optimize bundle size
- Use TypeScript for larger projects

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)
- [Web.dev](https://web.dev/) - Google's web development guidance
- [CSS-Tricks](https://css-tricks.com/) - CSS techniques and tutorials
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
