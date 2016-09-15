var gulp = require('gulp')
var rename = require('gulp-rename')
var svgstore = require('gulp-svgstore')

gulp.task('svgIcons', ['clean'], function () {
  return gulp.src('src/icons/**/*.svg')
    .pipe(rename({prefix: 'icon--'}))
    .pipe(svgstore({fileName: 'icons.svg', inlineSvg: true}))
    .pipe(rename({suffix: '.svg', extname: '.liquid'}))
    .pipe(gulp.dest('./src/snippets/'))
})
