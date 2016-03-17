var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


 elixir(function(mix) {
     mix.sass('app.scss')
     .sass('backend/app.scss', 'public/css/backend')
     .browserify([
     ], 'public/js/app.js')
     .version([
         'css/backend/app.css',
         'css/app.css',
         'js/app.js'
     ])
     .browserSync({proxy: 'hundstudio.app'});
 });
