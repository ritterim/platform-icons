const codepoint = require('./src/reserved-codepoints.json');
module.exports = {
  inputDir: './src/optimized-icons', // (required)
  outputDir: './public', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['html', 'json', 'css'],
  prefix: 'pi',
  tag: 'i',
  name: 'platform-icons',
  fontHeight: 300,
  normalize: true,
  templates: {
    html: './src/templates/html.hbs',
    css: './src/templates/css.hbs'
  },
  codepoints: codepoint
};
