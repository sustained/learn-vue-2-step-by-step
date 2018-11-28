const fs = require('fs');
const path = require('path');

const mix = require('laravel-mix');

function loadFiles(directory) {
    return fs.readdirSync(directory).filter(file => {
        return fs.statSync(path.join(directory, file)).isFile();
    });
}

const LESSONS_DIR = path.resolve(__dirname, 'resources/js/lessons');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

loadFiles(LESSONS_DIR).forEach((file) => {
    mix.js(path.join(LESSONS_DIR, file), 'public/js');
});
