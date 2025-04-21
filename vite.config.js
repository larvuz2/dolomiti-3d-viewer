import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  define: { CESIUM_BASE_URL: JSON.stringify("/cesium") },
  resolve: { alias: { cesium: resolve("node_modules/cesium") } },
}); 