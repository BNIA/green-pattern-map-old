var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var replace = require('gulp-replace')

gulp.task('make_mdl_scheme', () => {
    return gulp.src(['src/mdl-config.scss', './node_modules/material-design-lite/src/material-design-lite.scss'])
        .pipe(concat({path: './node_modules/material-design-lite/src/material-design-lite-concat.scss'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('material-design-lite.css'))
        .pipe(replace(/rgb\(#([A-Z,0-9,a-z]*)\)/g, '#$1'))
        .pipe(gulp.dest('./src/landing/styles'))
})