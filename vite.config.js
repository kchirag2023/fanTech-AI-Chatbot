import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy /api/claude → Anthropic API to bypass CORS in dev
      "/api/claude": {
        target: "https://api.anthropic.com",
        changeOrigin: true,
        rewrite: (path) => "/v1/messages",
      },
    },
  },
});
