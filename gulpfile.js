var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return sass('src/scss/**/*.scss', {style: 'expanded', sourcemap:true})
  .on('error', sass.logError)
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build/css'));

});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
})