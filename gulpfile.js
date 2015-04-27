var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var tap = require('gulp-tap');

gulp.task('uglify', function() {
  var paths = ['src/js/module.js','src/js/controllers.js'];

  gulp.src(paths,{base: 'src/js/'})
      .pipe(sourcemaps.init())
      .pipe(concat({path: 'geral.min.js'}))
      .pipe(uglify({mangle: false}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('build/js/'))
});

gulp.task('jade', function() {
  gulp.src('src/jade/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./build/views/'))
});

gulp.task('sass', function () {
  gulp.src('src/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('geral.min.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('coffee', function() {
  gulp.src('src/coffee/*.coffee')
      .pipe(coffee({bare: true}))
      .pipe(gulp.dest('./src/js'))
});

gulp.task('default', ['coffee'], function(){
  setTimeout(function(){
    gulp.start(['uglify','sass', 'jade']);
  }, 500);
});