import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ohmytidbits',
  description: 'everything I know & learn',

  head: [
    // Favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Mobile theme color
    ['meta', { name: 'theme-color', content: '#1e2024' }],
    // Font preload
    ['link', { rel: 'preload', href: '/fonts/Inter-VariableFont_slnt,wght.ttf', as: 'font', type: 'font/ttf', crossorigin: "" }]
  ],

  appearance: true,      // enable dark/light
  lastUpdated: true,     // file last updated timestamp
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: '/logo.svg',
    // Announcement bar (top-level hook)
    announcement: {
      id: 'new-feature',
      content: '🎉 Check out the new “Quick Tips” panel—hover the lightbulb icon on any page!'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'API', link: '/api/' },
      {
        text: 'More',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'About', link: '/about' }
        ]
      }
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Getting Started',
          collapsible: false,
          items: [
            { text: 'Installation', link: '/guides/installation' },
            { text: 'Configuration', link: '/guides/configuration' }
          ]
        },
        {
          text: 'Advanced',
          collapsible: true,
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

    // “Edit this page” link
    editLink: {
      pattern: 'https://github.com/shravan20/ohmytidbits/edit/main/docs/:path',
      text: '✏️ Edit on GitHub'
    },

    // Algolia Search
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'ohmytidbits'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shravan20/ohmytidbits' },
      { icon: 'twitter', link: 'https://x.com/shravan20' }
    ],

    // Footer with minimal copyright
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2023–2025 OhMyTidbits'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Back to top button
    backToTop: true,

    // Doc footer navigation
    docFooter: {
      prev: '⬅️ Previous',
      next: 'Next ➡️'
    },

    // Custom “hooks” slot keys you can pick up in your theme
    hooks: {
      onPageRender: (page) => {
        // e.g. inject a “feedback” widget or lightbulb icon
      },
      onSiteDataLoaded: (siteData) => {
        // e.g. dynamically adjust sidebar depth
      }
    }
  }
})
