const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .js('node_modules/popper.js/dist/popper.js', 'public/js').sourceMaps()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js'
        }
    }
});
