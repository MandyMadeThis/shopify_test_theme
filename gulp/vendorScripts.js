var gulp = require('gulp')
var constants = require('../constants')
var concat = require('gulp-concat')

var vendorFiles = [
  'node_modules/slick-carousel/slick/slick.js'
]

gulp.task('vendor-scripts', ['clean'], function () {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor-scripts.js'))
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
})
