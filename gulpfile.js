var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var livereload = require('gulp-livereload');

gulp.task('build:css', function() {
  gulp.src('./src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/stylesheets'));
});

gulp.task('build:html', function() {
  gulp.src('./src/template/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('default', function() {
  //gulp.watch('./src/stylesheets/*.scss', ['build:css']);
  livereload.listen();
  gulp.watch('./src/template/*.jade', ['build:html']);
});
