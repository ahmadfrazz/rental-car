import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable during development to test service worker
      },
      manifest: {
        name: "My PWA App",
        short_name: "MyApp",
        description: "My progressive web app built with Vite and React",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          // {
          //   src: '/icons/icon-192x192.png',
          //   sizes: '192x192',
          //   type: 'image/png',
          // },
          // {
          //   src: '/icons/icon-512x512.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          // },
        ],
      },
    }),
  ],
});
