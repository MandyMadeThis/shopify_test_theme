var gulp = require('gulp')
var gulpShopify = require('gulp-shopify-upload')
var config = require('../config.json')
var watch = require('gulp-watch')
var constants = require('../constants')

var options = {
  'basePath': './' + constants.theme + '/'
}

// Watch our theme folder for changes
gulp.task('deploy-watch', ['clean'], function () {
  return watch('./' + constants.theme + '/' + '+(assets|layout|config|snippets|templates|locales)/**')
    .pipe(gulpShopify(config.shopify_api_key, config.shopify_api_password, config.shopify_url, config.theme_id, options))
})

gulp.task('deploy', ['build'], function () {
  return gulp.src('./' + constants.theme + '/' + '+(assets|layout|config|snippets|templates|locales)/**')
    .pipe(gulpShopify(config.shopify_api_key, config.shopify_api_password, config.shopify_url, config.theme_id, options))
})
