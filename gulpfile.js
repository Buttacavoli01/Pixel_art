const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('autopre', () =>
  gulp.src('css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css'))
);
