var gulp        = require('gulp');
var sync        = require('gulp-npm-script-sync');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

// your gulpfile contents

sync(gulp);
