import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: './',
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
