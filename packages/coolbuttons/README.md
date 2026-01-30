<div align="center">
  <img src="https://raw.githubusercontent.com/coolbuttons/coolbuttons/refs/heads/main/public/package-icon/icon.png" alt="Cool Buttons">


# Cool Buttons 🎨

**400+ production-ready button components for React, Vue, Svelte, and Vanilla JavaScript.**

Universal package that works with any framework or vanilla JS.

## 📦 Installation

```bash
npm install coolbuttons
```

## 🚀 Quick Start

### React
```typescript
import { ClassicButton, ModernButton, GlassButton } from 'coolbuttons/react';

export default function App() {
  return (
    <>
      <ClassicButton>Classic</ClassicButton>
      <ModernButton>Modern</ModernButton>
      <GlassButton>Glass</GlassButton>
    </>
  );
}
```

### Vanilla JavaScript
```javascript
import { createButton, createGlassButton } from 'coolbuttons/vanilla';

const button = createButton({ text: 'Click me' });
document.body.appendChild(button);
```

### Vue / Svelte / Other Frameworks
```javascript
import * from 'coolbuttons/vanilla';
// Use vanilla JS components that work in any framework
```

## 📚 Features

✨ **Button Styles**
- Claymorphic, Neumorphic, Glassmorphic
- Cyberpunk, Minimal, Animated
- Gradient, Brutalist, and more

🎯 **Framework Agnostic**
- React components
- Vanilla JavaScript utilities
- Works with Vue, Svelte, Angular, Astro

🎨 **Fully Customizable**
- Tailwind CSS based
- Easy to modify and extend
- Copy-paste friendly code

⚡ **Production Ready**
- Zero external dependencies (for vanilla version)
- Optimized performance
- Accessible and semantic HTML

📱 **Responsive Design**
- Mobile-first approach
- Works on all modern browsers
- Dark mode support

## 📖 Documentation

Visit [coolbuttons.dev](https://coolbuttons.dev) for:
- Interactive button showcase
- Copy-to-clipboard code snippets
- Implementation guides
- Live examples

## 🎯 Usage Examples

### React with TypeScript
```tsx
import {
  GlassButton,
  NeumorphicButton,
  CyberpunkButton,
} from 'coolbuttons/react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <GlassButton onClick={() => console.log('clicked')}>
        Glass Style
      </GlassButton>
      <NeumorphicButton>Neumorphic</NeumorphicButton>
      <CyberpunkButton>Cyberpunk</CyberpunkButton>
    </div>
  );
}
```

### Vanilla JavaScript
```javascript
import { createGlassButton, createNeumorph } from 'coolbuttons/vanilla';

// Create a glass button
const glassBtn = createGlassButton({
  text: 'Click me',
  onClick: () => alert('Clicked!'),
});

// Create neumorphic button
const neuBtn = createNeumorph({
  text: 'Neumorphic',
  color: '#ff7a00',
});

document.body.append(glassBtn, neuBtn);
```

## 🏗️ Sub-packages

This package includes:

### `@coolbuttons/react`
React components and hooks for button implementations.
```bash
npm install @coolbuttons/react
```

### `@coolbuttons/vanilla`
Vanilla JavaScript utilities and helper functions.
```bash
npm install @coolbuttons/vanilla
```

## 🎨 Customization

All buttons are built with Tailwind CSS, making them easy to customize:

```jsx
import { GlassButton } from 'coolbuttons/react';

export function CustomButton() {
  return (
    <GlassButton className="!bg-purple-500 !text-white">
      Custom Colors
    </GlassButton>
  );
}
```

## 🌙 Dark Mode

Built-in dark mode support:

```jsx
<div className="dark">
  <GlassButton>Works in dark mode</GlassButton>
</div>
```

## 📦 Bundle Size

- **React package**: ~15KB (gzipped)
- **Vanilla package**: ~8KB (gzipped)
- **Main package**: ~2KB (re-export wrapper)

## 🤝 Contributing

We welcome contributions! Please see our [GitHub repository](https://github.com/coolbuttons/coolbuttons) for more information.

## 📄 License

MIT © [Cool Buttons](https://github.com/coolbuttons)

## 🔗 Links

- [Website](https://coolbuttons.dev)
- [GitHub](https://github.com/coolbuttons/coolbuttons)
- [NPM](https://www.npmjs.com/package/coolbuttons)
- [Documentation](https://coolbuttons.dev/guide)

---

Made with ❤️ by the Cool Buttons team
