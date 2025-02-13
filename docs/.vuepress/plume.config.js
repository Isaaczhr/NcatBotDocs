import { defineThemeConfig } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineThemeConfig({
  lang: 'zh-CN',
  blog: false,
  logo: '/images/logo.png',
  plot: true,
  social: [
    { icon: 'github', link: 'https://github.com/liyihao1110/ncatbot' },
    { icon: 'qq', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Vu7KB9gEv9TftvJLYcl846CTqsLUc6Ey&authKey=8JBJhlZro%2B1%2FakeBZ3yJMVeHzlsFYTMHU0RJK%2FpMBmkpZSH7w2CbXU6M2X66PTCQ&noverify=0&group_code=201487478' },
    { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508H30.742c-3 0-4.406-1.43-4.406-4.43V2.875H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m15.258-31.828h16.64c-.164-.961-.844-1.899-1.945-3.047L32.57 5.102c-1.078-1.125-2.062-1.805-3.047-1.97v16.9c0 .843.446 1.265 1.29 1.265"/></svg>', name :'docs'}, link: 'https://docs.ncatbot.xyz' },
  ],
  navbarSocialInclude: ['github', 'qq', 'docs'],
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