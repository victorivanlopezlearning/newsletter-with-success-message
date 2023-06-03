const { src, dest } = require('gulp');

// SASS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
// Autoprefixer
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// Cssnano
const cssnano = require('cssnano');

function css() {
    return src('src/scss/app.scss')
        .pipe(plumber())
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss( [autoprefixer(), cssnano() ]) )
        .pipe( dest('assets/css') )
};
exports.css = css;