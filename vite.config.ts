import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteStaticCopy()],
  base: '/tvfwebsite/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
