import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor'
            }
            return 'deps'
          }
          if (id.includes('/src/')) {
            return 'app'
          }
        },
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash][extname]',
      },
    },
  },
  server: {
    // Bundle deps in dev so individual components don't show in network tab
    warmup: {
      clientFiles: ['./src/**/*.tsx', './src/**/*.css'],
    },
  },
  // Pre-bundle all source files in dev mode
  optimizeDeps: {
    entries: ['./src/main.tsx'],
  },
})
