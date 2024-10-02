import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mui/material', 
      '@mui/icons-material',
      '@mui/icons-material/CheckCircleOutline',
      '@mui/icons-material/CheckCircle',
      '@mui/icons-material/Delete']
    }
  }
})
