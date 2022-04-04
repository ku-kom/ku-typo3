/* eslint-disable no-undef */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
  };

  gulp.task('clean', () => {
    return del([
        './Resources/Public/Css/Dist',
    ]);
});

gulp.task('sass', function() {
  return gulp.src('./Resources/Public/Scss/Theme/theme.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./Resources/Public/Css/Dist'));
});

gulp.task('scripts', function() {
    return gulp.src('./Resources/Public/JavaScript/Src/**/*.js')
        // Todo: concatenate and uglify
      .pipe(gulp.dest('./Resources/Public/JavaScript//Dist/*.min.js'));
  });

gulp.task('watch', function () {
  gulp.watch('./Resources/Public/Scss/**/*.scss', gulp.series(['clean', 'sass']));
  // gulp.watch('app/js/*.js', gulp.series('scripts'));
  // gulp.watch('app/img/*', gulp.series('images'));
});
