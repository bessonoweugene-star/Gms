import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  base: './',
  build: {
    target: 'es2022', chunkSizeWarningLimit: 2000,
    rollupOptions: { input: { main: resolve(__dirname, 'index.html'), ash: resolve(__dirname, 'ash/index.html') } },
  },
  server: { host: true },
  preview: { host: true },
});
