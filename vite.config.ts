import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite configuration for both dev and preview environments.
// The preview section is used in production on Railway via `vite preview`.
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 3000,
    // Allow Railway preview host to connect without being blocked
    allowedHosts: ["agentlanding-production.up.railway.app"],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
