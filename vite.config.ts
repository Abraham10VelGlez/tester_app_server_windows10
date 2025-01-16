import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    host: true, // Permite que el servidor se ejecute en 0.0.0.0
    port: 5173, // Asegúrate de que coincide con tu configuración
    watch: {
      usePolling: true, // Necesario para entornos Docker
    },
    strictPort: true, // Asegura que Vite no cambie el puerto automáticamente
    //middlewareMode: "html",
  },
});
