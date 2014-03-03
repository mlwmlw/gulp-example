var gulp = require('gulp');
var livereload = require('gulp-livereload');
var lrserver = livereload();
//var lr = require('tiny-lr')
//var livereloadport = 35729;
//var lrserver = lr();
var serverport = 8080;



gulp.task('default', ['serve', 'watch']);

gulp.task('watch', function() {
	gulp.watch('public/**').on('change', function(file) {
		lrserver.changed(file.path);
	});
});


gulp.task('serve', function() {
	var http = require('http');
	var ecstatic = require('ecstatic');
	http.createServer(ecstatic({ root: __dirname + '/public' })).listen(serverport);
});
 
