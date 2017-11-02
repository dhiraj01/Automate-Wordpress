var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
	concateSS = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
	browserify = require('gulp-browserify'),
	path = require('path');

var src = './process',
    dest = './app';


gulp.task('js', function() {
  return gulp.src(src + '/js/app.js')
    .pipe(browserify())
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(dest + '/js'));
});

gulp.task('css', function() {
  gulp.src( src + '/css/app.css')
    .pipe(concatCss('app.css', { rebaseUrls: false }))
  .pipe(autoprefixer())
  .pipe(livereload())
  .pipe(gulp.dest(dest + '/css'));
});

gulp.task('watch', function() {
    gulp.watch([src + '/js/**/*');
    gulp.watch(src + '/css/*.css');
    gulp.watch(dest + '/*.html');
});

gulp.task('webserver', ['html', 'css', 'js'], function() {
  gulp.src(dest)
  .pipe(webserver({
      livereload: true,
      open: true
  }));
});

gulp.task('default', ['watch', 'webserver']);
