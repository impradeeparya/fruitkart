var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');


/*
* files path
*/
var jsModules = [
  'src/app/*.js',
  'src/app/**/**/*.js'
];

var jsFiles = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/angular/angular.js',
  'node_modules/angular-route/angular-route.js'
];

var htmlFiles = [
  'src/*.html',
  'src/app/***/**/*.html'
];

var cssFiles = [
  'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/font-awesome/css/font-awesome.min.css'
];

var jsDest = 'dist/assests/js';
var cssDest = 'dist/assests/styles/css';
var fontDest = 'dist/assests/styles/fonts'

var fontFiles = [
  'node_modules/font-awesome/fonts/*.*'
];



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
    gulp.watch(jsModules, ['lint']);
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
        .pipe(gulp.dest(jsDest));
});

/*
* minify all third party css
*/
gulp.task('minify-css', function() {
  gulp.src(cssFiles)
    .pipe(concat('third-party.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(cssDest))
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
* copy modules file
*/
gulp.task('copy-font-files', function () {
  gulp.src(fontFiles)
    .pipe(gulp.dest(fontDest));
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
    ['lint', 'watch', 'minify-js', 'copy-html-files', 'copy-modules-files'],
    ['connect']
  );
});

/*
* build application -> clean and check for error in files
*/
gulp.task('build', function() {
  jsDest = 'src/assests/js'
  cssDest = 'src/assests/styles/css'
  fontDest = 'src/assests/styles/fonts'
  runSequence(
    ['clean'],
    ['lint', 'watch', 'minify-js', 'minify-css', 'copy-font-files'],
    ['dev-deploy']
  );
});