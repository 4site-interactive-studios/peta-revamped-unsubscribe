import { defineConfig } from "vite";
import { resolve } from "path";
import basicSsl from "@vitejs/plugin-basic-ssl";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    https: true,
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/main.js",
      name: "PETARevampedUnsubscribe",
      fileName: "peta-revamped-unsubscribe",
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    minify: false,
    target: "esnext",
  },
  plugins: [basicSsl(), cssInjectedByJsPlugin()],
  define: {
    "process.env": {},
  },
});
