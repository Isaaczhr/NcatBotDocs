import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
        'link', { rel: 'icon', href: '/images/solar--cat-linear.svg' }
    ]
  ],
  theme: plumeTheme({
    lang: 'zh-CN',
    locales: {
      '/': { lang: 'zh-CN', title: '文档' }
    },
    blog: false,
    plot: true,
    sidebar: 'auto',
    notes,
    changelog: true,
    contributors: true,
    plugins: {
      git: process.env.NODE_ENV === 'production'
    }
  }),
  bundler: viteBundler(),
  
})
