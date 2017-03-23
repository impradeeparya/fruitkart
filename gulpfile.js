var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

/*
* check js files for error
*/
gulp.task('lint', function() {
    return gulp.src(['src/app/scripts/*.js', 'src/app/scripts/**/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
* watch files for changes
*/
gulp.task('watch', function() {
    gulp.watch(['src/app/scripts/*.js', 'src/app/scripts/**/**/*.js'], ['lint']);
});

/*
* deploy application to server
*/
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

/*
* Application deployment
*/
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

/*
* clean dist folder
*/
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

/*
* create default task
*/
gulp.task('default', ['connect', 'lint', 'watch']);

/*
* build application -> clean and check for error in files
*/
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['lint', 'connectDist']
  );
});