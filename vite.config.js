import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://www.portafolio.samirfranco.tech",
  esbuild: {
    
    target: 'es6'
  },
  
});
