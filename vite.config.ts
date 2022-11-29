import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

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
  plugins: [
    vue(),
    vueJsx(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "pinia"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components/base"],
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
    }),
    WindiCSS({
      scan: {
        dirs: ["."], // all files in the cwd
        fileExtensions: ["vue", "js", "ts"], // also enabled scanning for js/ts
      },
    }),
    generateManifest(),
  ],
});
