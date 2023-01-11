import path from "path";

import { defineConfig } from "vite";
import dts from "vite-dts";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const isExternal = (id) => !id.startsWith(".") && !path.isAbsolute(id);

export default defineConfig(() => ({
  esbuild: {
    jsxInject: "import React from 'react'",
    sourcemap: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
  plugins: [
    dts(),
    svgr({ icon: true }),
    react({
      jsxRuntime: "classic",
    }),
    cssInjectedByJsPlugin(),
  ],
}));
