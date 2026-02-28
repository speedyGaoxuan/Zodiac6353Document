import { defineConfig } from 'vitepress'

const config = defineConfig({
  title: "FRC 6353 文档库",
  description: "FRC队伍6353的完整技术文档",
  lang: 'zh-CN',
  base: '/',
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'FRC 6353',

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '技术', link: '/tech/overview' },
      { text: '资源', link: '/resources/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装配置', link: '/guide/setup' }
          ]
        }
      ],
      '/tech/': [
        {
          text: '技术文档',
          items: [
            { text: '总览', link: '/tech/overview' },
            { text: '机械系统', link: '/tech/mechanical' },
            { text: '电气系统', link: '/tech/electrical' },
            { text: '代码架构', link: '/tech/code-architecture' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源库',
          items: [
            { text: 'CAD设计', link: '/resources/cad' },
            { text: '代码仓库', link: '/resources/repositories' },
            { text: '学习资料', link: '/resources/learning' },
            { text: '参考链接', link: '/resources/links' }
          ]
        }
      ]
    },

    footer: {
      message: 'FRC 6353 Team Documentation',
      copyright: 'Copyright © 2024-present FRC Team 6353'
    },

    search: {
      provider: 'local'
    }
  }
})

export default config
