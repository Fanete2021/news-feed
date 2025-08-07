import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [ react() ],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
