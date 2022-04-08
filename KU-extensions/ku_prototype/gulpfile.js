'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const del = require('del');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

gulp.task('cleanCss', () => {
  return del([
    './Resources/Public/Css/Dist/**/*',
  ]);
});

gulp.task('cleanJs', () => {
  return del([
    './Resources/Public/JavaScript/Dist/**/*',
    '!./Resources/Public/JavaScript/Dist/jquery.min.js'
  ]);
});

gulp.task('sass', () => {
  return gulp.src('./Resources/Public/Scss/Theme/theme.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./Resources/Public/Css/Dist'));
});

gulp.task('scripts', () => {
  return gulp.src('./Resources/Public/JavaScript/Src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(sourcemaps.write())
    .pipe(concat('ku-scripts.min.js'))
    .pipe(gulp.dest('./Resources/Public/JavaScript/Dist'));
});

gulp.task('watch', () => {
  gulp.watch('./Resources/Public/Scss/Theme/**/*.scss', gulp.series(['cleanCss', 'sass']));
  gulp.watch('./Resources/Public/JavaScript/Src/**/*.js', gulp.series(['cleanJs', 'scripts']));
});
