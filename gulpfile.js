const { src, dest, series, parallel } = require('gulp');

const connect = require('gulp-connect');
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const run = require('gulp-run');
const merge = require('merge-stream');
const { watch } = require('gulp');

function serve() {
  connect.server({
    root: './',
    port: 8001,
    livereload: true
  });
}

function copyStaticAssets() {
  const css = src('./dist/*.css')
    .pipe(clean())
    .pipe(dest('./dist/css'))
    .pipe(dest('./'));

  const fonts = src([
      './dist/*.eot',
      './dist/*.ttf',
      './dist/*.woff',
      './dist/*.woff2',
      './dist/*.svg'
    ])
    .pipe(clean())
    .pipe(dest('./dist/fonts'))
    .pipe(dest('./'));

  const html = src('./dist/platform-icons.html')
    .pipe(rename('index.html'))
    .pipe(dest('./'));

  return merge(css, fonts, html)
    .pipe(connect.reload());
}

function make() {
  return run('npm run make').exec();
}

function watchFiles() {
  watch('./src/svg/*', make, copyStaticAssets);
}

exports.build = series(make, copyStaticAssets);
exports.make = make;
exports.serve = serve;
exports.copyStaticAssets = copyStaticAssets;
exports.default = parallel(series(make, copyStaticAssets), serve, watchFiles);
