const { src, dest } = require('gulp');

// SASS
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('assets/css') )
};

exports.css = css;