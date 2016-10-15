"use strict";

var gulp            = require("gulp"),
    sass            = require("gulp-sass"),
    gulpSourcemaps  = require("gulp-sourcemaps"),
    gulpBrowserify  = require("gulp-browserify"),
	livereload      = require('gulp-livereload'),
    connect         = require("gulp-connect");

var path = {
    srcCSS:    './scss/*.scss',
    destCSS:   './css'
};

gulp.task('sass', function () {
    return gulp.src(path.srcCSS)
        .pipe(gulpSourcemaps.init())
        .pipe(gulpSourcemaps.write())
		.pipe(sass())
        .pipe(gulp.dest(path.destCSS))
        .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('/.')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('build', ['sass']);

gulp.task("watch", function() {
	var server = livereload();
    gulp.watch(path.srcCSS, ['sass']);
});

gulp.task("default", ["build", "watch", "sass", "connect"]);