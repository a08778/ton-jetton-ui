import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ton-jetton-ui/',
  plugins: [react()],
})
