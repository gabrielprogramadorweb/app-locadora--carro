import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin'; // Adicione esta linha

export default defineConfig({
    plugins: [
        laravel({
            input: [ // Mude de colchetes para chaves
                'resources/js/app.js', // Seu arquivo de entrada JS principal
                // 'resources/css/app.css', // Descomente se você também estiver processando CSS com Vite
            ],
            refresh: true, // Recomendado para habilitar o recarregamento total da página no Laravel
        }),
        vue(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js', // Esta linha está correta
        },
    },
});
