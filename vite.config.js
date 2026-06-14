import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePages } from '@kingironman2011/vite-pages'

export default defineConfig({
  base: '/mehvarsalamatapp/', 
  plugins: [
    react(),
    vitePages(),
  ],
})