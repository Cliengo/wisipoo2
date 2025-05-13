import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'wisipoo': path.resolve(__dirname, '../packages/wisipoo/src/mod.tsx'),
      'wisipoo/dist/wisipoo.css': path.resolve(__dirname, '../packages/wisipoo/src/wisipoo.css'),
    },
  },
})
