import { defineConfig } from 'tsup'

export default defineConfig({
    entryPoints: ['src/index.ts'],
    format: ['cjs', 'esm', 'iife'],
    dts: false,
    splitting: true,
    clean: true,
    publicDir: './types'
})