var gulp = require('gulp');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus')
var paths = {
  scripts: ['./dev/js/*'],
  stylus: ['./dev/stylus/*']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
      .pipe(uglify())
    .pipe(gulp.dest('./pro/js'));
});

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
      	compress: 1
      }))
    .pipe(gulp.dest('./pro/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylus, ['stylus']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts','stylus']);