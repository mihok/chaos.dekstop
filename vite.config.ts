import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';
import electron from 'vite-plugin-electron';

export default defineConfig({
	plugins: [
		{ ...threeMinifier(), enforce: 'pre' },
		sveltekit(),
		electron([
			{
				entry: 'src/index.ts',
				vite: {
					build: {
						outDir: 'build'
					}
				}
			},
			{
				entry: 'src/preload.ts',
				onstart({ reload }) {
					// Notify the Renderer process to reload the page when the Preload
					// scripts build is complete,  instead of restarting the entire
					// Electron App.
					reload();
				},
				vite: {
					build: {
						outDir: 'build'
					}
				}
			}
		])
	],
	ssr: {
		noExternal: ['three']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
