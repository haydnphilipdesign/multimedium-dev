import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration for Multimedium.dev portfolio
// Includes path aliases for cleaner imports and optimized build settings
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize for production deployment
    sourcemap: false,
    assetsInlineLimit: 0, // Keep all assets as separate files
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        assetFileNames: (assetInfo) => {
          // Keep original file names for better debugging
          if (assetInfo.name && assetInfo.name.endsWith('.png')) {
            return '[name][extname]'
          }
          if (assetInfo.name && (assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.webp'))) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  server: {
    // Development server configuration
    port: 3000,
    open: true,
  },
})