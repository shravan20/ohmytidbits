import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ohmytidbits',
  description: 'everything I know and learn',

  // Site meta
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  // Enable dark/light mode
  appearance: true,

  // Last updated timestamp
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    // Top navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'API', link: '/api/' },
      {
        text: 'More',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'About', link: '/about' }
        ]
      }
    ],

    // Sidebar grouped by section
    sidebar: {
      '/guides/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/guides/installation' },
            { text: 'Configuration', link: '/guides/configuration' }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Theming', link: '/guides/theming' },
            { text: 'Plugins', link: '/guides/plugins' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'Runtime API',
          items: [
            { text: 'useData', link: '/api/useData' },
            { text: 'useNavigate', link: '/api/useNavigate' }
          ]
        }
      ],
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    // “Edit this page” links
    editLink: {
      pattern: 'https://github.com/your-username/ohmytidbits/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Algolia search
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'ohmytidbits'
      }
    },

    // Footer with copyright
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023–2025 Your Name'
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shravan20/ohmytidbits' },
      { icon: 'twitter', link: 'https://x.com/shravan20' }
    ],

    // Table of contents depth
    outline: [2, 3]
  }
})
