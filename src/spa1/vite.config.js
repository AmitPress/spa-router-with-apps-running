import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'../../public/spa1'
  },
  plugins: [svelte()]
})
