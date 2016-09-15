var constants = require('../constants')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

// Minify images - YAS Please
gulp.task('images', ['clean'], function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
})
