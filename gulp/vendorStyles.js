var gulp = require('gulp')
var constants = require('../constants')
var concat = require('gulp-concat')

var vendorFiles = [
  'node_modules/nouislider/distribute/nouislider.min.css',
  'node_modules/slick-carousel/slick/slick.css',
  'node_modules/slick-carousel/slick/slick-theme.css'
]

gulp.task('vendor-styles', ['clean'], function () {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor-styles.css'))
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
})
