# Algolia Search Setup Guide

This guide will help you set up Algolia search for your VitePress knowledge wiki.

## Step 1: Create Algolia Account

1. Go to [Algolia](https://www.algolia.com/) and create a free account
2. Create a new application (you can name it "ohmytidbits" or similar)

## Step 2: Get Your Credentials

From your Algolia dashboard:

1. **Application ID**: Found in your dashboard overview
2. **Search API Key**: Go to API Keys → "Search-Only API Key" (NOT the Admin API Key)
3. **Index Name**: Create a new index (e.g., "ohmytidbits")

## Step 3: Update Configuration

Replace the placeholder values in `.vitepress/config.mts`:

```typescript
search: {
  provider: 'algolia',
  options: {
    appId: 'YOUR_ACTUAL_APP_ID',
    apiKey: 'YOUR_ACTUAL_SEARCH_API_KEY',
    indexName: 'YOUR_ACTUAL_INDEX_NAME'
  }
}
```

## Step 4: Index Your Content

You have several options to index your content:

### Option A: Manual Upload (Simple)
1. Export your content to JSON format
2. Upload manually through Algolia dashboard

### Option B: GitHub Actions (Automated)
Create `.github/workflows/algolia-index.yml`:

```yaml
name: Index to Algolia

on:
  push:
    branches: [main]

jobs:
  index:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build site
        run: npm run docs:build
        
      - name: Index to Algolia
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_ADMIN_KEY: ${{ secrets.ALGOLIA_ADMIN_KEY }}
          ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}
        run: |
          # Add indexing script here
          echo "Indexing to Algolia..."
```

### Option C: DocSearch (Recommended for Documentation)
Apply for [Algolia DocSearch](https://docsearch.algolia.com/) - it's free for open source projects and handles indexing automatically.

## Step 5: Environment Variables

For security, store your credentials as environment variables or GitHub secrets:

- `ALGOLIA_APP_ID`
- `ALGOLIA_ADMIN_KEY` (for indexing only)
- `ALGOLIA_INDEX_NAME`

## Content Structure for Indexing

Your content should be indexed with this structure:

```json
{
  "objectID": "unique-id",
  "title": "Page Title",
  "content": "Page content...",
  "url": "/path/to/page",
  "hierarchy": {
    "lvl0": "Section",
    "lvl1": "Subsection",
    "lvl2": "Sub-subsection"
  },
  "tags": ["programming", "javascript"]
}
```

## Testing

1. After setting up, build your site: `npm run docs:build-local`
2. Test the search functionality
3. Verify results are relevant and properly formatted

## Troubleshooting

- **No results**: Check if your index has content
- **Wrong results**: Review your indexing structure
- **Search not appearing**: Verify API credentials
- **CORS errors**: Ensure you're using the Search API Key, not Admin Key

## Alternative: Keep Local Search

If you prefer to keep the simpler local search, change the config back to:

```typescript
search: {
  provider: 'local'
}
```

Local search works well for smaller knowledge bases and doesn't require external setup.
