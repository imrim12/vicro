import fs from "node:fs";
import path from "node:path";

import { InlineConfig, createServer, resolveConfig, mergeConfig, Plugin } from "vite";

import { manifest } from "../manifest";

import viteConfig from "../vite.config";

console.log("Starting Chrome Extension development server...");

const serverConfig = resolveConfig(viteConfig as InlineConfig, "serve", "development");

const server = await createServer(
  mergeConfig(serverConfig, {
    plugins: [
      {
        name: "vite:chrome",
        buildStart() {
          // Create hidden build directory
          if (!fs.existsSync(".chrome")) {
            fs.mkdirSync(".chrome");
          }

          fs.writeFileSync(
            path.resolve(".chrome", "manifest.json"),
            JSON.stringify(manifest, undefined, 2)
          );
        },
        load(id: string) {
          console.log(id);
        },
      },
    ] as Plugin[],
  })
);

await server.listen();

server.printUrls();
