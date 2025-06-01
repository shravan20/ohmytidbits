# Oh My Tidbits 📚

> A personal wiki for everything I learn and know

[![Built with VitePress](https://img.shields.io/badge/Built%20with-VitePress-646CFF?style=flat&logo=vite)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌱 About

"Oh My Tidbits" is my digital garden - a personal knowledge base built with VitePress where I document my learning journey, knowledge, and useful resources. This project follows the concept of a personal wiki that grows organically as I continue to learn and explore.

## ✨ Features

- **Knowledge Base**: Organized collection of general notes and guides
- **Full-text Search**: Quickly find specific content
- **Dark/Light Mode**: Toggle between themes for comfortable reading
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Fast Performance**: Built with VitePress for optimal speed
- **Code Snippets**: Useful code examples and patterns

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ohmytidbits.git
cd ohmytidbits

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build the site
npm run docs:build

# Preview production build
npm run docs:preview
```

## Project Structure

```bash
ohmytidbits/
├── .vitepress/           # VitePress configuration
│   ├── config.js         # Site configuration
│   └── theme/            # Custom theme components
├── public/               # Static assets
├── programming/          # Programming knowledge
│   └── ...
├── resources/            # Useful resources
│   └── ...
├── scripts/              # Utility scripts
│   ├── fetch-blogs.js    # Script to fetch blog content
│   └── ...
├── index.md              # Home page
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Available Scripts

- `npm run docs:dev` - Start the development server
- `npm run docs:build` - Build the site for production (includes blog fetching)
- `npm run docs:preview` - Preview the production build locally
- `npm run docs:serve` - Serve the built site
- `npm run generate` - Fetch blog content

## Technologies

- [VitePress](https://vitepress.dev/) - Static site generator optimized for documentation
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Markdown](https://www.markdownguide.org/) - Lightweight markup language

## Customization

The site configuration can be modified in the `.vitepress/config.js` file. This includes:

- Site metadata (title, description, etc.)
- Navigation structure
- Sidebar organization
- Theme customization
- Plugin settings

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--------------------------------------

Built with 📚 knowledge and ❤️ passion
