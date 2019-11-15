const { src, dest, series, parallel } = require('gulp');

const clean = require('gulp-clean');
const connect = require('gulp-connect');
const rename = require("gulp-rename");
const run = require('gulp-run');
const merge = require('merge-stream');
const { watch } = require('gulp');

function serve() {
  connect.server({
    root: './',
    port: 8002,
    livereload: true
  });
}

function copyStaticAssets() {
  const webfonts = src([
      './dist/*.eot',
      './dist/*.svg',
      './dist/*.ttf',
      './dist/*.woff',
      './dist/*.woff2',
    ])
    .pipe(clean())
    .pipe(dest('./dist/webfonts'))
    .pipe(dest('./'));

  const css = src('./dist/*.css')
    .pipe(clean())
    .pipe(dest('./dist/css'))
    .pipe(dest('./'));

  // for local dev only
  const html = src('./dist/platform-icons.html')
    .pipe(clean())
    .pipe(rename('index.html'))
    .pipe(dest('./'));

  return merge(css, html, webfonts)
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
