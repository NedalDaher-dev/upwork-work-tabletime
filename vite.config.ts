import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src/"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@types":path.resolve(__dirname, "./src/types"),
    }
  },
  optimizeDeps: {
    exclude: ['date-fns']
  }

  

})
