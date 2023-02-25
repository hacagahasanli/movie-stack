import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import prettierPlugin from "vite-plugin-prettier"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prettierPlugin({
      "printWidth": 80,
      "tabWidth": 2,
      "singleQuote": true,
      "trailingComma": "es5",
      "jsxSingleQuote": true,
      "jsxBracketSameLine": false
    })
  ],
})
