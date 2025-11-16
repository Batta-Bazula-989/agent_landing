import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Unified Vite config for dev (server) and production (preview)
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ["agentlanding-production.up.railway.app"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
