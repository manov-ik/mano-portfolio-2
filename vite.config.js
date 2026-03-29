import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000, // raise warning threshold to 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("three") || id.includes("@react-three")) {
            return "vendor-three";
          }
          if (id.includes("framer-motion") || id.includes("gsap") || id.includes("/motion/")) {
            return "vendor-motion";
          }
          if (id.includes("react-dom") || id.includes("react-router")) {
            return "vendor-react";
          }
          if (id.includes("react-helmet") || id.includes("react-icons") || id.includes("lucide-react")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
});
