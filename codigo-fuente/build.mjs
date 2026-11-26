import { build } from '/usr/lib/node_modules/tsx/node_modules/esbuild/lib/main.js';
await build({ entryPoints: ['src/main.tsx'], bundle: true, minify: true, outdir: 'dist', format: 'esm', jsx: 'automatic', loader: { '.jpg': 'file', '.png': 'file', '.mp3': 'file' }, assetNames: 'assets/[name]-[hash]', define: { 'process.env.NODE_ENV': '"production"' } });
