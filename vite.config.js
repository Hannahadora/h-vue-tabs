import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "h-vue-tab",
      fileName: (format) => `${format}.js`
    },
    // Make sure to externalize dep that shouldn't
    // Into uour library
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "Vue"
        },
      }
    }
  },
  plugins: [vue()],
})
