import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = resolve(import.meta.dirname, "src");

// Every top-level .html file in src/ is a page of the multi-page build.
const pages = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(root, file)])
);

export default defineConfig({
  root,
  // Relative asset URLs, so the build works under any sub-path (e.g. GitHub Pages /web-2026/).
  base: "./",
  publicDir: resolve(import.meta.dirname, "public"),
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: { input: pages }
  }
});
