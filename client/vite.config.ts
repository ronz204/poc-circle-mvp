import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@App": "/src/App",
      "@Assets": "/src/Assets",
      "@Routes": "/src/Routes",
      "@Components": "/src/Components",
    },
  },
});
