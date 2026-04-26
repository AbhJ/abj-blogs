import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * The app is deployed under /abj-blogs on GitHub Pages.
 * Vite uses `base` (CRA used `homepage`).
 *
 * Vite's default `appType: 'spa'` handles client-side routing fallback for us:
 * any unknown path under `base` will be served the root `index.html`, and
 * React Router takes it from there. No custom middleware needed.
 */
export default defineConfig({
	base: '/abj-blogs/',
	plugins: [react()],
	build: {
		outDir: 'dist',
		sourcemap: true,
	},
	server: {
		port: 3000,
		open: '/abj-blogs/',
	},
});
