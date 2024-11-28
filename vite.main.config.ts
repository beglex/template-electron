import {defineConfig} from 'vite';

// https://vitejs.dev/config
export default defineConfig(({mode}) => ({
    build: {sourcemap: mode === 'development'},
    resolve: {
        alias: {
            '@root': '/src',
        },
    },
}));
