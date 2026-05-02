import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/dashboard/',
  server:{
    open:true,
    port:8080
  },
  plugins: [react()],
})
