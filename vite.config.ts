import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = new URL('.', import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${root}src/`,
    },
  },
})
