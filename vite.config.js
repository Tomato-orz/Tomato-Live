import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const bili = 'https://api.bilibili.com/'
const biliLive = 'https://api.live.bilibili.com/'
const douyu = 'https://m.douyu.com/api'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 选项写法
      // '/bili': {
      //   target: bili,
      //   changeOrigin: true,
      //   // secure:false
      //   rewrite: (path) => {
      //     // console.log(path);
      //     return path.replace(/^\/bili/, '')
      //   },
      //   headers:{
      //     referer: 'https://www.bilibili.com/'
      //   }
      // },
      // 选项写法
      '/Live': {
        target: biliLive,
        changeOrigin: true,
        // secure:false
        rewrite: (path) => {
          // console.log(path);
          return path.replace(/^\/Live/, '')
        },
        headers: {
          referer: 'https://www.bilibili.com/'
        }
      },
      // 选项写法
      '/api': {
        target: douyu,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // secure:false
      },
    }
  },
  base: './',
  build: {
    outDir: 'docs'
  }
})
