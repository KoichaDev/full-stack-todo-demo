import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		globals: true,
	},
	server: {
		hmr: {
			host: 'localhost',
		},
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
});
