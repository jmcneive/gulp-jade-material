var gulp = require('gulp');

var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
// var takana = require('takana');

// Run Takana
// gulp.task('takana', function() {
//   takana.run({
//     path:         __dirname, // run from the current working directory
//     includePaths: []         // optional include paths
//   });
// });

// Compile Jade
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade( {
            pretty: true
        }))
        .pipe(gulp.dest('builds/development'));
});

//Compile SASS
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(plumber () )
        .pipe(sass({
            style: 'nested',
            lineNUmbers: true
        }))
        .pipe(gulp.dest('builds/development/css'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});


gulp.task('default', ['sass', 'jade', 'watch']);
