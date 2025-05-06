import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import Tailwindcss from "@tailwindcss/vite"; 

export default defineConfig({
  plugins: [react(), Tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
});
