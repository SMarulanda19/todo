import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    modules: true // Habilitar módulos CSS si es necesario
  }
})
