import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { jobs } from "./src/data/jobs.js";
import { companies, companyByName } from "./src/data/companies.js";

const root = resolve(import.meta.dirname, "src");

// Vite does not track .ejs partials, so reload the page when one changes.
const reloadOnPartialChange = {
  name: "reload-on-partial-change",
  configureServer(server) {
    server.watcher.on("change", (file) => {
      if (file.endsWith(".ejs")) {
        server.ws.send({ type: "full-reload" });
      }
    });
  }
};

// Every top-level .html file in src/ is a page of the multi-page build.
const pages = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(root, file)])
);

export default defineConfig({
  root,
  // Pages are EJS templates, e.g. <%- include('partials/footer') %>. The sample data is available to every page.
  plugins: [ViteEjsPlugin({ jobs, companies, companyByName }), reloadOnPartialChange],
  // Relative asset URLs, so the build works under any sub-path (e.g. GitHub Pages /web-2026/).
  base: "./",
  publicDir: resolve(import.meta.dirname, "public"),
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    sourcemap: true,
    // Keep every image as a separate file; inlining small ones as base64 would defeat srcset.
    assetsInlineLimit: 0,
    rollupOptions: { input: pages }
  }
});
