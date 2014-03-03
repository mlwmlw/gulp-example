var gulp = require('gulp');
var livereload = require('gulp-livereload');
var lrserver = livereload();
var stylus = require('gulp-stylus');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish')
var serverport = 8080;

gulp.task('default', ['devel']);
gulp.task('devel', ['serve', 'watch']);
gulp.task('production', ['serve']);

gulp.task('watch', function() {
	gulp.watch('public/**').on('change', function(file) {
		lrserver.changed(file.path);
	});
	gulp.watch('public/assets/stylus/*', ['stylus'])
	gulp.watch('public/assets/js/*.js', ['lint'])
});

gulp.task('stylus', function() {
	return gulp.src('./public/assets/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/assets/css'));
});

gulp.task('lint', function() {
	return gulp.src('./public/assets/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('serve', function() {
	var http = require('http');
	var ecstatic = require('ecstatic');
	http.createServer(ecstatic({ root: __dirname + '/public' })).listen(serverport);
});
 
