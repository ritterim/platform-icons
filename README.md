# Platform Icons
Separate package for [Platform UI](https://github.com/ritterim/platform-ui) Icons
## How to use
### CDN Usage
- In your projects `<head>` section, include one of the following lines:

```html
<!-- UNPKG -->
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-icons/dist/style.css"/>

<!-- JSDELIVR -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ritterim/platform-icons/dist/style.css"/>

<!-- Skypack -->
<link rel="stylesheet" href="https://cdn.skypack.dev/@ritterim/platform-icons/dist/style.css"/>
```
### NPM Installation
- In your project, install the Platform Icons package via npm

```
npm install @ritterim/platform-icons
```

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
4. After installing dependencies, build the project by running `npm run build`
5. To start dev server, run `npm start`
6. To create package, run `npm run pack`

## SVG Setup for Contributing

Some notes on svg setup

| source | default |
|---|---|
| artboard | 4" x 4" |
| main stroke | 24pt |
| auxiliary stroke | 18pt |
| corner | .15" |
| join |	round |

 - Use compound paths (remember, there is no white 😜)
 - Expand to outlines 

## Codepoints

Codepoints are the hexadecimal pointer to an icon. Here, they're used to target icons in CSS using `:before`:

```html
<i class="pi-platfrom-ui"></i>

<style>
  .pi-platform-ui:before {
    content: "\f18f";
  }
</style>
```

Each time the icon set is generated there's a chance these pointers may shift. To avoid this, we copy `/generated/platform-icons.json` map to `reserved-codepoints.json` to maintain the current label-to-codepoint map so codepoints don't change. 

## Dependencies
- [SVGO](https://github.com/svg/svgo) - used to optimize all SVG icons
- [Fantasticon](https://github.com/tancredi/fantasticon) - used to build icon fonts
- [Vite](https://github.com/vitejs/vite) - used for dev server and building library
  - Vite Plugins:
    - [vite-plugin-banner](https://github.com/chengpeiquan/vite-plugin-banner) - used to prepend licensing info
    - [rollup-plugin-copy](https://github.com/vladshcherbin/rollup-plugin-copy) - used to copy generated font files to the public directory
    - [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars)- used to run the handlebars templates