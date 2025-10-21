import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "ffffff",
        secondary: "d9d9d9",
        tertiary: "e6b0b0"
      },
    }
  }
})
