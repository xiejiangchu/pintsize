// Gulp tasks

var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename');


// Build Pintsize scss into css
gulp.task('pintsize', function(){
  gulp.src('./scss/pintsize.scss')
      .pipe(sass())
      .pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
      .pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
      .pipe(prefix())
      .pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
      .pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
      .pipe(gulp.dest('css'))
      .pipe(minifyCSS())
      .pipe(rename('pintsize.min.css'))
      .pipe(gulp.dest('./css/'))
      .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
      .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
});





