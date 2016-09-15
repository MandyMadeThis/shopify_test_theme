var gulp = require('gulp')
var requireDir = require('require-dir')

requireDir('gulp')

gulp.task('build', [
  'vendor-scripts',
  'vendor-styles',
  'browserify',
  'config',
  'images',
  'layout',
  'scss',
  'snippets',
  'svgIcons',
  'templates'
])

// Default gulp action when 'gulp' command is run
gulp.task('default', ['build', 'watch', 'deploy-watch'])
