import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    open: true,
  },
  test: {
    globals: true,
    mockReset: true,
  },
})
