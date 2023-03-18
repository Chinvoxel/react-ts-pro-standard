import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  }
})
