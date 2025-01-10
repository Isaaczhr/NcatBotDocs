import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  theme: plumeTheme({
    blog: false,
    sidebar: 'auto',
    notes
  }),
  bundler: viteBundler(),
})
