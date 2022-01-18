# Platform Icons
Separate package for [Platform UI](https://github.com/ritterim/platform-ui) Icons
## How to use
- In your project, install the Platform Icons package via npm or CDN (not yet available!)
- Include in your HTML or import into your stylesheet
```html
<!-- index.html -->
<link rel="stylesheet" href="path/to/node_modules/@ritterim/platform-icons/dist/style.css"/>
```

```css
/* style.css */
import 'path/to/node_modules/@ritterim/platform-icons/dist/style.css'
```

- Use icons in your HTML:
```html
<i class="pi-check"></i>
```

## Dev Instructions
1. Clone repo
2. Navigate into the repo folder
3. Run `npm install` to install dependencies
4. To start dev server, run `npm start`
5. To build, run `npm run build`
6. To create package, run `npm run pack`

## Dependencies
- [SVGO](https://github.com/svg/svgo) - used to optimize all SVG icons
- [Fantasticon](https://github.com/tancredi/fantasticon) - used to build icon fonts
- [Vite](https://github.com/vitejs/vite) - used for dev server and building library
  - Vite Plugins:
    - [vite-plugin-banner](https://github.com/chengpeiquan/vite-plugin-banner) - used to prepend licensing info
    - [rollup-plugin-copy](https://github.com/vladshcherbin/rollup-plugin-copy) - used to copy generated font files to the public directory