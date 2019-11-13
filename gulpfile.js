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

  const fonts = src('./dist/*.{eot, ttf, woff, woff2, svg}')
    .pipe(clean())
    .pipe(dest('./dist/fonts'))
    .pipe(dest('./'));

  const html = src('./dist/platform-icons.html')
    .pipe(rename('index.html'))
    .pipe(dest('./'));

  return merge(css, fonts, html)
    .pipe(connect.reload());
}

function build() {
  return run('npm run build').exec();
}

function watchFiles() {
  watch('./src/svg/*', build, copyStaticAssets);
}

exports.build = series(build, copyStaticAssets);
exports.build = build;
exports.serve = serve;
exports.copyStaticAssets = copyStaticAssets;
exports.default = parallel(series(build, copyStaticAssets), serve, watchFiles);
