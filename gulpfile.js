var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');


/*
* files path
*/
var jsModules = [
  'src/modules/*.js',
  'src/modules/**/**/*.js'
];

var jsFiles = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/angular/angular.js',
  'node_modules/angular-route/angular-route.js'
];

var htmlFiles = [
  'src/*.html',
  'src/***/**/*.html'
];

var jsDestination = 'dist/assests/js';



/*
* check js files for error
*/
gulp.task('lint', function() {
    return gulp.src(jsModules)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
* watch files for changes
*/
gulp.task('watch', function() {
    gulp.watch(modulesJS, ['lint']);
});

/*
* Application deployment
*/
gulp.task('connect', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

/*
* Application deployment dev
*/
gulp.task('dev-deploy', function () {
  connect.server({
    root: 'src/',
    port: 9999
  });
});


/*
* clean dist folder
*/
gulp.task('clean', function() {
    gulp.src('dist/*')
      .pipe(clean({force: true}));
});

/*
* minify all third party js
*/
gulp.task('minify-js', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('third-party.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(jsDestination));
});

/*
* copy html files to dist folder
*/
gulp.task('copy-html-files', function () {
  gulp.src(htmlFiles)
    .pipe(gulp.dest('dist/'));
});


/*
* copy modules file
*/
gulp.task('copy-modules-files', function () {
  gulp.src(jsModules)
    .pipe(gulp.dest('dist/modules'));
});



/*
* create default task
*/
gulp.task('default', ['lint', 'watch']);

/*
* deploy application -> clean dist folder, check for error in files, copy files, deploy to server
*/
gulp.task('deploy', function() {
  runSequence(
    ['clean'],
    ['lint', 'minify-js', 'copy-html-files', 'copy-modules-files'],
    ['connect']
  );
});

/*
* build application -> clean and check for error in files
*/
gulp.task('build', function() {
  jsDestination = 'src/assests/js'
  runSequence(
    ['clean'],
    ['lint', 'minify-js'],
    ['dev-deploy']
  );
});