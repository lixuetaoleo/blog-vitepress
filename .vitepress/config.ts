import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog-vitepress/',
  title: "LXT's space",
  description: 'Share something :)',
  srcDir: 'docs',
  lang: 'zh-CN',

  themeConfig: {
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文章', link: '/posts/api-examples', activeMatch: '/posts/' },
      { text: '关于我', link: '/about' },
      { text: '作品', link: '/gallery' },
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/posts/': {
        base: '/posts/',
        items: [
          {
            text: '所有文章',
            items: [
              { text: 'api examples', link: 'api-examples' },
              { text: 'One', link: 'markdown-examples' },
            ],
          },
        ],
      },
    },

    outline: {
      label: '目录',
      level: 'deep',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
