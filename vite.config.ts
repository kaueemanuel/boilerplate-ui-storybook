import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import cleanup from "rollup-plugin-cleanup"

import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cleanup({ comments: "istanbul", extensions: ["js", "ts"] }),
    dts({
      insertTypesEntry: true,
      exclude: "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: [
        resolve(__dirname, "lib/index.ts"),
        resolve(__dirname, "lib/components.ts"),
        resolve(__dirname, "lib/themes.ts"),
        resolve(__dirname, "lib/material.ts"),
        resolve(__dirname, "lib/icons-material.ts"),
      ],
      name: "boilerplate-ui-mui-storybook",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`
        }

        return `${name}.${format}`
      }
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "@emotion/styled": "@emotion/styled",
          "@emotion/react": "@emotion/react",
          "@mui/material": "@mui/material",
        }
      }
    }
  }
})
