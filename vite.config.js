import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inline-base64',
      transform(code, id) {
        if (id.endsWith('?b64')) {
          const filePath = id.replace(/\?b64$/, '');
          const base64 = fs.readFileSync(filePath, 'base64');
          const ext = filePath.split('.').pop();
          return `export default "data:image/${ext};base64,${base64}"`;
        }
      }
    }
  ],
})
