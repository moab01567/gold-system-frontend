import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Eksporter til Vite sin `define`
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
