const { src, dest, series, parallel } = require('gulp');

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
  const copy = src('./dist/*')
    .pipe(dest('./dist'))
    .pipe(dest('./'));

  // for local dev only
  const html = src('./dist/platform-icons.html')
    .pipe(rename('index.html'))
    .pipe(dest('./'));

  return merge(copy, html)
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
