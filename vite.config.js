import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages live at /acme-ai/, so assets must resolve under that base.
export default defineConfig({
  base: '/acme-ai/',
  plugins: [react()],
})
