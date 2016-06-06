import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import includes from 'gulp-file-include';
import browserSync from 'browser-sync';

const bs = browserSync.create(),
      OPTIONS = {
        browserSync: {
          server: {
            baseDir: '.',
            middleware: (req, res, next) => {
              res.setHeader('Access-Control-Allow-Origin', '*');
              next();
            }
          },
          open: false,
          notify: false
        }
      };

gulp.task('build', () => {
  return gulp.src(['src/docs.md'])
          .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
          .pipe(includes())
         .pipe(gulp.dest('.'));
});

gulp.task('serve', () => bs.init(OPTIONS.browserSync));

gulp.task('watch', () => {
  return gulp.watch(['src/**/*'], ['build'])
});

gulp.task('default', ['build', 'serve', 'watch']);