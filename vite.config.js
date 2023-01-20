// vite.config.js
const { defineConfig } = require('vite');
const path = require('path');
import banner from 'vite-plugin-banner';
import copy from 'rollup-plugin-copy';
import handlebars from 'vite-plugin-handlebars';
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
    handlebars(),
    copy({
      targets: [
        { src: './src/generated/platform-icons.json', dest: './src', rename: 'reserved-codepoints.json' }
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'PlatformIcons',
      fileName: 'platform-icons',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: "platform-icons.[ext]",
      },
    }
  },
});
