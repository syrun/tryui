import { URL, fileURLToPath } from 'node:url'
import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
  },
  build: {
    // 将目标文件作为一个库来打包，而不是网页
    lib: {
      entry: path.resolve(__dirname, './packages/try-ui/index.ts'),
      name: 'try-ui',
      fileName: format => `try-ui-${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 过滤掉 vue
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
