const { src, dest } = require('gulp');

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

function css() {
    return src('src/scss/app.scss')
        .pipe(plumber())
        .pipe( sourcemaps.init() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss( [autoprefixer(), cssnano() ]) )
        .pipe(sourcemaps.write('.'))
        .pipe( dest('assets/css') )
};
exports.css = css;