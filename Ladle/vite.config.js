import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',  // Ensure this is set
  },
  plugins: [
    react(),
    ],
    server: {
      //setting up a proxy to direct all API calls to nodejs API
      proxy: {
        '/players': {
        target: 'http://localhost:3000',
        changeOrigin: true
        },
        '/secretword': {
        target: 'http://localhost:3000',
        changeOrigin: true
        },
      },
    },  
      
  })
