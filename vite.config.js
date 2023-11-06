import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5151,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:5151',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})