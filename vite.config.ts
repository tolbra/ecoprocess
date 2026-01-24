import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // mode === 'github' -> for GitHub Pages (https://tolbra.github.io/ecoprocess/)
  // mode === 'prod' or default -> for custom domain / hosting (https://ecoprocess.kz/)
  base: mode === 'github' ? '/ecoprocess/' : '/',

  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
