const { src, dest, series, parallel } = require('gulp');

const clean = require('gulp-clean');
const connect = require('gulp-connect');
const rename = require("gulp-rename");
const run = require('gulp-run');
const merge = require('merge-stream');
const header = require('gulp-header');
const pjson = require('./package.json');
const { watch } = require('gulp');
const year = new Date().getFullYear();
const piHeader = ['/*!',
  '  Platform Icons v' + pjson.version + ' | ' + pjson.name + '\n',
  '  ' + pjson.description + ' (' + pjson.homepage + ')',
  '  ©' + year + ' ' + pjson.author,
  '  ' + pjson.bugs.url,
  '  Released under the ' + pjson.license + ' license.',
  '*/',
  ''].join('\n');

function serve() {
  connect.server({
    root: './site',
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
    .pipe(dest('./site'));

  const css = src('./dist/*.css')
    .pipe(clean())
    .pipe(header(piHeader))
    .pipe(dest('./dist/css'))
    .pipe(dest('./site'));
  
  const platformUiCss = src('./node_modules/@ritterim/platform-ui/dist/platform-ui.min.css')
    .pipe(dest('./site'));

  const siteAssets = src('./assets/**/*', { base: '.' })
    .pipe(dest('./site'));

  // for local dev only
  const html = src('./dist/platform-icons.html')
    .pipe(clean())
    .pipe(rename('index.html'))
    .pipe(dest('./site'));

  return merge(css, platformUiCss, html, siteAssets, webfonts)
    .pipe(connect.reload());
}

function generateAssets() {
  return run('npm run generate-assets').exec();
}

function watchFiles() {
  watch('./src/svg/*', generateAssets, copyStaticAssets);
}

exports.build = series(generateAssets, copyStaticAssets);
exports.serve = serve;
exports.copyStaticAssets = copyStaticAssets;
exports.default = parallel(series(generateAssets, copyStaticAssets), serve, watchFiles);
