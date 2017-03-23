var gulp = require('gulp');

var jshint = require('gulp-jshint');

/*
* check js files for error
*/
gulp.task('lint', function() {
    return gulp.src('src/app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
* watch files for changes
*/
gulp.task('watch', function() {
    gulp.watch('src/app/js/*.js', ['lint']);
});

/*
* create default task
*/
gulp.task('default', ['lint', 'watch']);