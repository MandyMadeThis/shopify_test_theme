var gulp = require('gulp')
var flatten = require('gulp-flatten')
var constants = require('../constants')
var folders = ['snippets', 'templates', 'layout']

folders.forEach(function (folder) {
  gulp.task(folder, ['clean'], function () {
    return gulp.src('src/' + folder + '/**/*')
      .pipe(flatten())
      .pipe(gulp.dest('./' + constants.theme + '/' + folder))
  })
})
