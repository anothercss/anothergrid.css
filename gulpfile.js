var gulp = require('gulp');
var gulpif = require('gulp-if');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

var paths = {
  css: {
    src: './anothergrid.css',
    dest: ['./dist','./examples/css']
  }
};

var processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-custom-media'),
  require('postcss-calc')
];


var cssTask = function(options) {
  return gulp.src(options.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(options.dest))
    .pipe(gulpif(options.minify, rename({
      extname: ".min.css"
    })))
    .pipe(gulpif(options.minify, cssmin(options.cssmin)))
    .pipe(gulpif(options.minify, gulp.dest(options.dest)))
}


gulp.task('dev', function() {
  cssTask({
    src: paths.css.src,
    minify: false,
    dest: paths.css.dest
  });
})


gulp.task('prod', function() {
  cssTask({
    src: paths.css.src,
    minify: true,
    cssmin: {
      advanced: true,
      aggressiveMerging: true,
      benchmark: false,
      compatibility: '*',
      debug: false,
      keepBreaks: false,
      keepSpecialComments: 0,
      mediaMerging: true,
      roundingPrecision: 10,
      shorthandCompacting: false
    },
    dest: paths.css.dest
  });
})
