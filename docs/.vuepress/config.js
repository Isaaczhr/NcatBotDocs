import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  head: [
    [
        'link', { rel: 'icon', href: '/images/solar--cat-linear.svg' },
        'link', { rel: 'icon', href: '/images/solar--cat-linear.svg' }
    ]
  ],
  locales: {
    '/': { lang: 'zh-CN', title: 'NcatBot 文档' }
  },
  theme: plumeTheme({
    lang: 'zh-CN',
    blog: false,
    plot: true,
    navbar: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/ucli0mqd/' },
    ],
    sidebar: 'auto',
    notes,
    changelog: true,
    contributors: true,
    plugins: {
      git: process.env.NODE_ENV === 'production'
    },
    footer: { message: "", copyright: "© 2025 NcatBot" }
  }),
  bundler: viteBundler(),
  
})
