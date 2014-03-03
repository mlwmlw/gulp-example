var gulp = require('gulp');
//var lr = require('tiny-lr')
//var livereloadport = 35729;
//var lrserver = lr();
var livereload = require('gulp-livereload');

var serverport = 8080;


gulp.task('default', ['serve', 'watch']);

gulp.task('watch', function() {
	gulp.watch('public/*.html', ['html']);
});

gulp.task('html', function() {
	return gulp.src("public/*.html");
});

gulp.task('serve', function() {
	var http = require('http');
	var ecstatic = require('ecstatic');
	//var lrserver = require('tiny-lr')();
	http.createServer(ecstatic({ root: __dirname + '/public' })).listen(serverport);

	//Set up your livereload server
	//lrserver.listen(livereloadport);
	var server = livereload();
	gulp.watch('public/**').on('change', function(file) {
		server.changed(file.path);
	});
});
 
