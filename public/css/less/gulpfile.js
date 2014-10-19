/*!
 * BigInt - Vzhibo.tv
 * ** We use gulp to auto generate and minify css files .
 */

// Load plugins
var del = require('del'),
    path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

var path_source = ['./src/*.less'];
path_dev = '../dev/';
path_deploy = '../';

// Less
gulp.task('less', function () {
    gulp.src(path_source)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path_dev))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(path_dev))
        .pipe(notify({ message: 'less task complete' }));
});

gulp.task('product', function(){
    gulp.src(path_source)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path_dev))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(path_dev))
        .pipe(gulp.dest(path_deploy));
});

// Clean
gulp.task('clean', function() {
    del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('product');
});

gulp.task('deploy',function(){
    gulp.src('./dist')
        .pipe(gulp.dest(path_deploy));
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./**/*.less', ['clean','product']);

});