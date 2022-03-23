import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import path from 'path'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/base.scss";'
      },
      css: {
        additionalData: '@import "./src/assets/styles/base.scss";'
      }
    }
  }
})
