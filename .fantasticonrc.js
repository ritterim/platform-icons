const codepoints = require('./src/platform-icons.json');

module.exports = {
  inputDir: './src/optimized-icons',
  outputDir: './public',
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['html', 'json', 'css'],
  prefix: 'pi',
  tag: 'i',
  name: 'platform-icons',
  fontHeight: 300,
  normalize: true,
  formatOptions: {
    json: {
      indent: 2
    }
  },
  codepoints,
  templates: {
    html: './src/templates/html.hbs',
    css: './src/templates/css.hbs'
  },
  pathOptions: {
    json: './src/platform-icons.json',
    html: './index.html'
  }
};
