/*
 * @Description: vite options
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-23 12:13:03
 * @LastEditTime: 2022-08-30 10:07:21
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  base: './',
  resolve: {
    // 路径缩写
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 'public': path.resolve(__dirname, './public'),
      // 'settings': path.resolve(__dirname, './settings'),
      // 'theme': path.resolve(__dirname, './src/assets/styles/themes'),
    },
  },
  plugins: [react()],
  json: {
    stringify: true // 导入的 JSON 会被转换为 export default JSON.parse('...')
  },
}))
