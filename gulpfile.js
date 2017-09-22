var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'default', function() {
	console.log( 'Default task' );
});



// Grab all .scss files in input directory /app/scss
// Run sass on them
// put .css files in output directory /dist/css
gulp.task( 'sassify', function() {
	return gulp.src( 'app/scss/**/*.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'dist/css') );
});

gulp.task( 'htmlify', function() {
	return gulp.src( 'app/**/*.html' )
		.pipe( gulp.dest( 'dist') );
});

gulp.task( 'watch', function() {
	gulp.watch( 'app/scss/**/*.scss', [ 'sassify' ] );	
	gulp.watch( 'app/**/*.html', [ 'htmlify' ] );	
});
