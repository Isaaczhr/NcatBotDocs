import { defineThemeConfig } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineThemeConfig({
  lang: 'zh-CN',
  blog: false,
  plot: true,
  navbar: [
    { text: '首页', link: '/' },
    { text: '快速开始', link: '/guide/dto79lp7/' },
  ],
  sidebar: 'auto',
  notes,
  changelog: true,
  contributors: true,
  plugins: {
    git: process.env.NODE_ENV === 'production',
    markdownPower: {
      demo: true, // 启用新的代码演示功能
    },
    markdownEnhance: {
      demo: false, // 禁用旧的代码演示功能
    },
  },
  footer: { message: "", copyright: "© 2025 NcatBot" },
  copyright: 'CC-BY-4.0',
})