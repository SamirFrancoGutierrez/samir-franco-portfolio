import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/samir-franco-portfolio",
  esbuild: {
    
    target: 'es6'
  },
  
});
