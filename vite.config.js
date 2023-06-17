import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        goal_page: resolve(__dirname, 'goal_page/index.html'),
        // login: resolve(__dirname, 'login/index.html'),
      },
    },
  },
})