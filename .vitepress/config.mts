import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Oh My Tidbits",
  description: "Everything I know and learn",
  base: '/',  // Use root path for local testing - change to '/ohmytidbits/' for GitHub Pages
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'everforest-light',
      dark: 'github-dark'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#1e2024' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Oh My Tidbits',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Programming', link: '/programming/' },
      { text: 'Learning Notes', link: '/notes/' },
      { text: 'Blog', link: '/blogs/' },
      {
        text: 'Resources', link: '/resources/'
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'How to Use', link: '/how-to-use' }
          ]
        },
        {
          text: 'Programming',
          items: [
            { text: 'JavaScript', link: '/programming/javascript' },
            { text: 'TypeScript', link: '/programming/typescript' },
            { text: 'Node.js', link: '/programming/nodejs' },
            { text: 'Web Development', link: '/programming/web-dev' }
          ]
        },
        {
          text: 'Learning Notes',
          items: [
            { text: 'Daily Notes', link: '/notes/daily' },
            { text: 'Book Notes', link: '/notes/books' },
            { text: 'Course Notes', link: '/notes/courses' }
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Tools', link: '/resources/tools' },
            { text: 'Links', link: '/resources/links' },
            { text: 'Templates', link: '/resources/templates' }
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/shravan20/ohmytidbits/edit/main/:path',
      text: '✏️ Edit this page'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 OhMyTidbits'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shravan20/ohmytidbits' }
    ]
  }
})
