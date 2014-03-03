var gulp = require('gulp');
var livereload = require('gulp-livereload');
var lrserver = livereload();
var stylus = require('gulp-stylus');
var serverport = 8080;

gulp.task('default', ['serve', 'watch']);

gulp.task('watch', function() {
	gulp.watch('public/**').on('change', function(file) {
		lrserver.changed(file.path);
	});
	gulp.watch('public/assets/stylus/*', ['stylus'])
});
gulp.task('stylus', function() {
	return gulp.src('./public/assets/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/assets/css'));
});

gulp.task('serve', function() {
	var http = require('http');
	var ecstatic = require('ecstatic');
	http.createServer(ecstatic({ root: __dirname + '/public' })).listen(serverport);
});
 
