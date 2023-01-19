const codepoint = require('./src/reserved-codepoints.json')
module.exports = {
  inputDir: './src/optimized-icons', // (required)
  outputDir: './src/generated', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['scss', 'html', 'json'],
  prefix: 'pi',
  tag: 'i',
  name: 'platform-icons',
  fontHeight: 300,
  normalize: true,
  templates: {
    html: './src/templates/html.hbs'
  },
  codepoints: codepoint
};
