import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LXT's space",
  description: "Share something :)",
  srcDir: 'docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '文章', link: '/markdown-examples' },
      { text: '关于我', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    outline: {
      level: 'deep',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
