// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  // this MUST match your repo name (case-sensitive)
  base: "/Portfolio/",
  build: {
    outDir: "docs", // so Pages can serve from /docs on main
  },
});
