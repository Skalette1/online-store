import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["antd-mobile"], // Добавьте antd-mobile в external
    },
  },
  base: '/online-store/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});