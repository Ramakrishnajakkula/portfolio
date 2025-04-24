import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Updated to match repository name
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public')
    }
  }
})
