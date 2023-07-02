import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { VitePluginSass } from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        _redirects: path.resolve(__dirname, "_redirects"),
      },
    },
  },
});

const __dirname = path.dirname(new URL(import.meta.url).pathname);
