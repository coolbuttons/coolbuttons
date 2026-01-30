<p align="center">
  <a href="https://coolbuttons.dev">
    <img src="./public/favicon/favicon.svg" alt="Cool Buttons - The Ultimate Button Component Library" width="80">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@coolbuttons/react"><img src="https://img.shields.io/npm/v/@coolbuttons/react" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@coolbuttons/react"><img src="https://img.shields.io/npm/dm/@coolbuttons/react" alt="npm downloads"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg" alt="TypeScript"></a>
</p>

<p align="center">
  <a href="https://coolbuttons.dev">Website</a>
  ·
  <a href="https://www.npmjs.com/package/@coolbuttons/react">Packages</a>
  ·
  <a href="./OFFLINE_FEATURES.md">Guide</a>
  ·
  <a href="https://github.com/coolbuttons/coolbuttons">GitHub</a>
</p>

# Cool Buttons

Cool Buttons is an open-source button component library that provides 200+ beautifully crafted, production-ready button styles for React and Vanilla JavaScript. The library aims to make it easier for designers and developers to incorporate stunning buttons into their projects by providing several official packages with full TypeScript support.

## Packages

| Logo | Package | Version | Downloads | Links |
| ---- | ------- | ------- | --------- | ----- |
| <img src="https://cdn.jsdelivr.net/npm/react@18/favicon.ico" alt="React logo" width="48"> | **`@coolbuttons/react`** | [![npm](https://img.shields.io/npm/v/@coolbuttons/react)](https://www.npmjs.com/package/@coolbuttons/react) | ![NPM Downloads](https://img.shields.io/npm/dw/@coolbuttons/react) | [Docs](https://www.npmjs.com/package/@coolbuttons/react) · [Source](./packages/react) |
| <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517f3494d/topics/javascript/javascript.png" alt="JavaScript logo" width="48"> | **`@coolbuttons/vanilla`** | [![npm](https://img.shields.io/npm/v/@coolbuttons/vanilla)](https://www.npmjs.com/package/@coolbuttons/vanilla) | ![NPM Downloads](https://img.shields.io/npm/dw/@coolbuttons/vanilla) | [Docs](https://www.npmjs.com/package/@coolbuttons/vanilla) · [CDN](https://cdn.jsdelivr.net/npm/@coolbuttons/vanilla@1.0.4/dist/coolbuttons.min.js) |
| <img src="https://img.shields.io/badge/Universal-Package-orange" alt="Universal logo" width="48"> | **`coolbuttons`** | [![npm](https://img.shields.io/npm/v/coolbuttons)](https://www.npmjs.com/package/coolbuttons) | ![NPM Downloads](https://img.shields.io/npm/dw/coolbuttons) | [Docs](https://www.npmjs.com/package/coolbuttons) · [Source](./packages) |

## Installation

### React

```bash
npm install @coolbuttons/react
```

```jsx
import { Claymorphic, GlassCard, NeonBorder } from '@coolbuttons/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Claymorphic>Click me</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
    </div>
  );
}
```

### Vanilla JavaScript

```bash
npm install @coolbuttons/vanilla
```

```javascript
import { createButton } from '@coolbuttons/vanilla';

createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Button clicked!')
}).mount('#app');
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@coolbuttons/vanilla@1.0.4/dist/coolbuttons.min.js"></script>
<script>
  new CoolButton('Click me!', {
    onClick: () => console.log('Clicked!')
  }).mount('#app');
</script>
```

## Features

- 200+ beautifully crafted button styles
- Full TypeScript support
- Works with React and Vanilla JavaScript
- Zero dependencies
- Dark mode support
- CDN ready
- Offline support with Service Worker
- Professional error pages included

## Contributing

For more info on how to contribute please see the [contribution guidelines](./CONTRIBUTING.md).

## License

Cool Buttons is totally free for commercial use and personal use, this software is licensed under the [MIT License](LICENSE).

## Community

Have questions or want to share your Cool Buttons creations?

- 🌐 [Website](https://coolbuttons.dev)
- 🐙 [GitHub](https://github.com/coolbuttons/coolbuttons)
- 📧 [Email](mailto:devchauhan.developer@gmail.com)

<p align="center">
  <a href="https://vercel.com/?utm_source=coolbuttons">
    <img src="https://img.shields.io/badge/Powered%20by-Vercel-black" alt="Powered by Vercel" />
  </a>
  <a href="https://buymeacoffee.com/dev3">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-dev3-FFDD00?logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />
  </a>
</p>

---

Made with ❤️ by [Dev Chauhan](https://github.com/devchauhan)
