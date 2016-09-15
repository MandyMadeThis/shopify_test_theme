// This recipe came from a combo of this: http://anunexpectedcoder.com/blog/2015/12/03/dont-fence-me-in-how-to-use-gulp-with-shopify-and-timber-to-gain-control-of-your-front-end/ and this: https://gist.github.com/danharper/3ca2273125f500429945

var gulp = require('gulp')
var constants = require('../constants')
var notify = require('./notify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var sourcemaps = require('gulp-sourcemaps')

// JavaScripty Tings
gulp.task('browserify', function () {
  return browserify('src/js/app.js')
    .bundle()
    .on('error', notify)
    // Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
})
