// This recipe came from a combo of this: http://anunexpectedcoder.com/blog/2015/12/03/dont-fence-me-in-how-to-use-gulp-with-shopify-and-timber-to-gain-control-of-your-front-end/ and this: https://gist.github.com/danharper/3ca2273125f500429945

var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var constants = require('../constants')
var babel = require('babelify')

// Watch all the things
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['scss'])
  gulp.watch('src/js/**/*.js', ['browserify'])
  gulp.watch('src/images/**/*', ['images'])
  gulp.watch('src/icons/**/*.svg', ['svgIcons'])
  gulp.watch('src/snippets/**/*.liquid', ['snippets'])
  gulp.watch('src/templates/**/*.liquid', ['templates'])
  gulp.watch('src/layout/**/*.liquid', ['layout'])

  var watcher = watchify(browserify({
    // Specify the entry point of your app
    entries: ['src/js/app.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }).transform(babel))

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source('src/js/app.js'))
      .pipe(gulp.dest('./' + constants.theme + '/'))
  })
})
