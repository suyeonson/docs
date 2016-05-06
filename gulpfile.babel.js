import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import includes from 'gulp-file-include';

gulp.task('build', () => {
  return gulp.src(['src/docs.md'])
          .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
          .pipe(includes())
         .pipe(gulp.dest('.'));
});

gulp.task('watch', () => {
  return gulp.watch(['src/**/*'], ['build'])
});

gulp.task('default', ['build', 'watch']);