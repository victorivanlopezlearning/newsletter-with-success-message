const { src, dest, watch } = require('gulp');

// SASS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
// Autoprefixer
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// Cssnano
const cssnano = require('cssnano');
// sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// js
const terser = require('gulp-terser-js');

function css() {
    return src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe(plumber())
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss( [autoprefixer(), cssnano() ]) )
        .pipe(sourcemaps.write('.'))
        .pipe( dest('assets/css') )
};

function js() {
    return src('src/js/**/*.js') 
             .pipe( sourcemaps.init() ) 
             .pipe( terser() )
             .pipe( sourcemaps.write('.')) 
             .pipe( dest('assets/js'));
 };

function dev() {
    watch( 'src/scss/**/*.scss', css);
    watch( 'src/js/**/*.js', js);
};

exports.css = css;
exports.js = js;
exports.dev = dev;