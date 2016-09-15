var gulp = require('gulp')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var autoprefixer = require('gulp-autoprefixer')
var constants = require('../constants')
var notify = require('./notify')
var concat = require('gulp-concat')

// scss —> Expanded/Readable CSS file
gulp.task('scss', ['clean'], function () {
  gulp.src('src/scss/style.scss')
    .on('error', notify)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./' + constants.theme + '/assets'))

  gulp.src('src/scss/styleguide.scss')
    .on('error', notify)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
})
