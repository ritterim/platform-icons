// vite.config.js
const { defineConfig } = require('vite');
const path = require('path');
import banner from 'vite-plugin-banner';
import copy from 'rollup-plugin-copy';
const pjson = require('./package.json');
const year = new Date().getFullYear();

const puiHeader = [
  '/*',
  '  Platform Icons v' + pjson.version + ' | ' + pjson.name + '\n',
  '  ' + pjson.description + ' (' + pjson.homepage + ')',
  '  ©' + year + ' ' + pjson.author,
  '  ' + pjson.bugs.url,
  '  Released under the ' + pjson.license + ' license.',
  '*/',
  '',
].join('\n');

export default defineConfig({
  plugins: [
    banner(puiHeader),
    copy({
      targets: [
        { src: './src/generated/platform-icons.ttf', dest: './public' },
        { src: './src/generated/platform-icons.woff', dest: './public' },
        { src: './src/generated/platform-icons.woff2', dest: './public' },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'PlatformIcons',
      fileName: (format) => `platform-icons.${format}.js`,
    },
  },
});
