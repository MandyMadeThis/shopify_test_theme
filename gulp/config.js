var gulp = require('gulp')
var constants = require('../constants')

gulp.task('config', ['clean'], function () {
  return gulp.src('src/config/**/*')
    .pipe(gulp.dest('./' + constants.theme + '/config'))
})
