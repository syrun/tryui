import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
export default defineConfig({
  lang: 'en-US',
  title: 'WelCome try-ui',
  base: '/vitepress_docs/',
  lastUpdated: true,
  description: 'try-ui 组件库',
  themeConfig: {
    nav: [
      { text: '你好呀', link: '/index' },
    ],
    sidebar,
  },
})
