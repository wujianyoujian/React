import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugin: [react()],
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, 'src')
    }]
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})