# Cool Buttons Monorepo

Production-ready button component packages for React and Vanilla JavaScript.

## Packages

### [@coolbuttons/react](./react)
React component library with 9 button styles.

```bash
npm install @coolbuttons/react
```

```jsx
import { Claymorphic, GlassCard } from '@coolbuttons/react';

export default function App() {
  return <Claymorphic>Click Me</Claymorphic>;
}
```

### [@coolbuttons/vanilla](./vanilla)
Vanilla JavaScript library for creating buttons without frameworks.

```bash
npm install @coolbuttons/vanilla
```

```javascript
import { createButton } from '@coolbuttons/vanilla';

const button = createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Clicked!'),
});

button.mount('#app');
```

## Quick Start

### For React Projects

```bash
npm install @coolbuttons/react
```

```jsx
import { Claymorphic } from '@coolbuttons/react';

export default function Button() {
  return (
    <Claymorphic onClick={() => console.log('clicked')}>
      My Button
    </Claymorphic>
  );
}
```

### For Vanilla JavaScript

```bash
npm install @coolbuttons/vanilla
```

```html
<div id="app"></div>

<script type="module">
  import { createButton } from '@coolbuttons/vanilla';

  const btn = createButton('claymorphic', {
    text: 'Click Me!',
  });

  btn.mount('#app');
</script>
```

## Available Button Styles

All packages include these button styles:

- **Claymorphic** - Modern clay-like design with soft shadows
- **GlassCard** - Glassmorphism with backdrop blur
- **NeumorphicSoft** - Soft neumorphic design
- **Brutalist** - Minimal brutalist black & white
- **NeonBorder** - Neon orange border effect
- **GradientShadow** - Orange to red gradient
- **ModernMinimal** - Clean white minimal style

## Features

✅ Production-ready components  
✅ Zero dependencies (uses Tailwind CSS)  
✅ Fully customizable  
✅ TypeScript support  
✅ Multiple design styles  
✅ Responsive design  
✅ Dark mode support  

## Development

```bash
# Build all packages
npm run build:all

# Development mode
npm run dev:all

# Publish to npm
npm run publish:all
```

## License

MIT

## Support

For issues, questions, or suggestions: [GitHub Issues](https://github.com/devchauhann/coolbuttons/issues)
