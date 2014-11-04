/*!
 * BigInt - Vzhibo.tv
 * ** We use gulp to auto generate and minify css files .
 */

// Load plugins
var del = require('del'),
    path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// Define Vars
var less_src = ['./public/css/less/*.less'];
var sass_src = './public/css/scss/*.scss';

var path_dev = './public/css/dev/';
var path_dep = './public/css/';

// Less
gulp.task('less', function () {
    gulp.src(less_src)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path_dev))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(path_dev))
        .pipe(gulp.dest(path_dep))
        .pipe(notify({ message: 'less task complete' }));
});

// Sass
gulp.task('sass', function () {
    gulp.src(sass_src)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path_dev))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(path_dev))
        .pipe(gulp.dest(path_dep))
        .pipe(notify({ message: 'sass task complete' }));
});

// Clean
gulp.task('clean', function() {
    del(path_dev);
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('less');
    gulp.start('sass');
});


// Watch
gulp.task('less_watch', function() {

    // Watch .less files
    gulp.watch('./public/css/less/**/*.less', ['clean','less']);

});

gulp.task('sass_watch', function() {

    // Watch .scss files
    gulp.watch('./public/css/scss/**/*.scss', ['clean','sass']);

});