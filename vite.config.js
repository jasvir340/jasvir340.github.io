import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use root base so assets resolve correctly when served from a
  // custom domain. A non-root base caused blank pages because the
  // generated asset URLs did not match the deployed location.
  base: '/',
  plugins: [react()],
})
