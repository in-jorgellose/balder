import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
     root: resolve(__dirname, 'src/renderer/browser'),
  build: {
    rollupOptions: {
        input: resolve(__dirname, 'src/renderer/browser/index.html')
      }
    }
  }
})
