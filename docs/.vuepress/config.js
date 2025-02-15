import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.png' },
    ]
  ],
  locales: {
    '/': { lang: 'zh-CN', title: 'NcatBot 文档' }
  },
  theme: plumeTheme({
    hostname: 'http://plugins.ncatbot.xyz',
    docsRepo: 'https://github.com/Isaaczhr/docs.ncatbot.xyz',
    docsBranch: 'master',
    docsDir: 'docs',
    plugins: {
      shiki: {
        languages: ['yaml', 'python', 'shell', 'json'],
      },
      comment: {
        provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'Isaaczhr/docs.ncatbot.xyz',
        repoId: 'R_kgDONolemw',
        category: 'General',
        categoryId: 'DIC_kwDONolem84CmvqM',
      },
      markdownPower: {
        imageSize: 'all', // 'local' | 'all'
        plot: true,
      },
    }
  }),
  bundler: viteBundler(),
})
