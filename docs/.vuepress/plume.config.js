import { defineThemeConfig } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineThemeConfig({
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
    git: process.env.NODE_ENV === 'production',
    shiki: {
      theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    },
  },
  footer: { message: "", copyright: "© 2025 NcatBot" }
})