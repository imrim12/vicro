import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { manifest } from "./manifest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const generateManifest = () => {
  return {
    name: "generate-manifest",
    closeBundle: () => {
      fs.writeFileSync(
        path.resolve("./dist", "manifest.json"),
        JSON.stringify(manifest, undefined, 2)
      );
    },
  };
};

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./index.html"),
        background: path.resolve(__dirname, "./src/background.ts"),
        inject: path.resolve(__dirname, "./src/inject.ts"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vue(), vueJsx(), generateManifest()],
});
