import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   origin:'165.227.175.117',
  //   // port: 3000,
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
preview: {
  host: '165.227.175.117',
  port: 3000,
  open: true,
  strictPort: true,  
}  
})
console.log("Alias resolved to:", path.resolve(__dirname, "src"));
