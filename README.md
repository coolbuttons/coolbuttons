# 🎨 Cool Buttons

> A comprehensive collection of beautifully crafted, production-ready button components for React and Vanilla JavaScript. Choose from 200+ stunning button styles including glassmorphic, neumorphic, cyberpunk, retro, and modern designs.

[![npm version](https://img.shields.io/npm/v/@coolbuttons/react.svg)](https://www.npmjs.com/package/@coolbuttons/react)
[![npm downloads](https://img.shields.io/npm/dm/@coolbuttons/react.svg)](https://www.npmjs.com/package/@coolbuttons/react)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🎯 **200+ Button Styles** - Carefully designed and categorized button components
- ⚛️ **React Support** - Drop-in React components with TypeScript support
- 🚀 **Vanilla JavaScript** - Zero-dependency JavaScript library
- 📦 **Scoped npm Packages** - Easy installation via npm
- 🎨 **Multiple Design Systems**:
  - Glassmorphic
  - Neumorphic
  - Cyberpunk
  - Retro/90s
  - Modern Minimal
  - And 10+ more design categories
- ♿ **Accessibility** - WCAG compliant components
- 📱 **Responsive** - Works perfectly on all devices
- 🎭 **Fully Customizable** - Easy styling with Tailwind CSS or vanilla CSS
- 📚 **TypeScript First** - Full type support out of the box
- 🔧 **Production Ready** - Battle-tested and optimized

---

## 🚀 Quick Start

### For React Projects

#### Installation

```bash
npm install @coolbuttons/react
# or
yarn add @coolbuttons/react
# or
pnpm add @coolbuttons/react
```

#### Basic Usage

```jsx
import { Claymorphic, GlassCard, NeonBorder } from '@coolbuttons/react';

export default function App() {
  return (
    <div className="flex gap-4 p-8">
      {/* Claymorphic Button */}
      <Claymorphic onClick={() => alert('Clicked!')}>
        Claymorphic Button
      </Claymorphic>

      {/* Glass Card Button */}
      <GlassCard>
        Glass Card Button
      </GlassCard>

      {/* Neon Border Button */}
      <NeonBorder>
        Neon Border Button
      </NeonBorder>
    </div>
  );
}
```

#### With Props

```jsx
import { Brutalist, ModernMinimal } from '@coolbuttons/react';

export default function App() {
  return (
    <>
      <Brutalist
        onClick={() => console.log('Clicked!')}
        disabled={false}
        className="custom-class"
      >
        Brutalist Button
      </Brutalist>

      <ModernMinimal
        onClick={handleClick}
        className="my-custom-styling"
      >
        Modern Button
      </ModernMinimal>
    </>
  );
}
```

---

### For Vanilla JavaScript

#### Installation

```bash
npm install @coolbuttons/vanilla
# or
yarn add @coolbuttons/vanilla
# or
pnpm add @coolbuttons/vanilla
```

#### Basic Usage

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Create a button with default styles
const button = createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Button clicked!'),
});

// Mount to DOM
button.mount('#app');
```

#### Advanced Usage

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

// Create button using class
const button = new CoolButton('Neon Border Button', {
  style: `
    padding: 10px 20px;
    border: 2px solid #00ff00;
    background: #000;
    color: #00ff00;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  `,
  onClick: () => alert('Clicked!'),
});

// Add to page
button.mount('#container');

// Update text
button.setText('Updated Text');

// Disable/Enable
button.setDisabled(true);
button.setDisabled(false);
```

#### Available Styles

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Claymorphic
createButton('claymorphic', options);

// Glass Card
createButton('glasscard', options);

// Neumorphic
createButton('neumorphic', options);

// Brutalist
createButton('brutalist', options);

// Neon Border
createButton('neonborder', options);

// Gradient Shadow
createButton('gradientshadow', options);

// Modern Minimal
createButton('modernminimal', options);
```

---

## 📚 Available Buttons

### React Components (200+)

All buttons are exported from `@coolbuttons/react` and can be imported as:

```jsx
import { ButtonName } from '@coolbuttons/react';
```

#### Popular Categories

**Glassmorphic Buttons:**
- `GlassCard`
- `GlassFrostedInner`
- `GlassFrostyPill`
- `GlassInset`
- `GlassReflective`
- And more...

**Neumorphic Buttons:**
- `NeumorphicSoft`
- `NeumorphicConcave`
- `NeumorphicEmbossed`
- `NeumorphicDark`
- `HighElevatedNeumorphic`
- And more...

**Cyberpunk Buttons:**
- `Cyberpunk`
- `CyberBevel`
- `CyberGlow`
- `CyberGradient`
- `CyberSlice`
- And more...

**Retro & Vintage:**
- `Classic90s`
- `OldTerminal`
- `ArcadeGreen`
- `DiagonalStripes`
- And more...

**Modern & Minimal:**
- `ModernMinimal`
- `ModernPrimary`
- `MinimalArrow`
- `MinimalBadge`
- `MinimalPulse`
- And more...

**Liquid & Morphic:**
- `LiquidFill`
- `LiquidGradient`
- `LiquidPrism`
- `LiquidWarp`
- `MorphingShape`
- And more...

**Interactive & Animated:**
- `MagneticBorder`
- `MagneticCircle`
- `MagnifyHover`
- `FloatingPulse`
- `ExpandingAura`
- And more...

---

## 🎨 Button Props

### React Props

All button components accept these standard props:

```typescript
interface ButtonProps {
  children?: React.ReactNode;      // Button text/content
  onClick?: () => void;             // Click handler
  disabled?: boolean;               // Disable button
  className?: string;               // Custom CSS classes
}
```

### Example with All Props

```jsx
<Claymorphic
  onClick={handleClick}
  disabled={false}
  className="w-full md:w-auto"
>
  Click Me
</Claymorphic>
```

---

## 🎯 Use Cases

### E-commerce
Perfect for CTAs, add to cart, checkout buttons with premium feel.

```jsx
import { GlassCard, NeonBorder } from '@coolbuttons/react';

export function ProductCard() {
  return (
    <div>
      <GlassCard onClick={addToCart}>
        Add to Cart
      </GlassCard>
      <NeonBorder onClick={viewDetails}>
        View Details
      </NeonBorder>
    </div>
  );
}
```

### SaaS Dashboards
Modern, minimal buttons for professional applications.

```jsx
import { ModernMinimal, ModernPrimary } from '@coolbuttons/react';

export function ActionBar() {
  return (
    <>
      <ModernPrimary onClick={save}>Save</ModernPrimary>
      <ModernMinimal onClick={cancel}>Cancel</ModernMinimal>
    </>
  );
}
```

### Gaming & Entertainment
Cyberpunk and animated buttons for interactive sites.

```jsx
import { Cyberpunk, GlitchEffect } from '@coolbuttons/react';

export function GameMenu() {
  return (
    <>
      <Cyberpunk onClick={startGame}>Start Game</Cyberpunk>
      <GlitchEffect onClick={settings}>Settings</GlitchEffect>
    </>
  );
}
```

### Portfolio & Creative Sites
Unique, attention-grabbing buttons for creative work.

```jsx
import { LiquidGradient, ExpandingAura } from '@coolbuttons/react';

export function Hero() {
  return (
    <>
      <LiquidGradient onClick={scrollToWork}>
        See My Work
      </LiquidGradient>
      <ExpandingAura onClick={contactMe}>
        Contact Me
      </ExpandingAura>
    </>
  );
}
```

---

## 🎨 Styling & Customization

### Using Tailwind CSS

```jsx
import { Claymorphic } from '@coolbuttons/react';

export function CustomButton() {
  return (
    <Claymorphic className="w-full md:w-1/2 lg:w-1/4 text-lg font-bold">
      Responsive Button
    </Claymorphic>
  );
}
```

### Using CSS Modules

```jsx
import { GlassCard } from '@coolbuttons/react';
import styles from './Button.module.css';

export function StyledButton() {
  return (
    <GlassCard className={styles.button}>
      Styled Button
    </GlassCard>
  );
}
```

### Vanilla JavaScript Styling

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Styled Button', {
  style: `
    padding: 12px 24px;
    background: linear-gradient(45deg, #ff006e, #8338ec);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  `,
  onClick: () => console.log('Clicked!'),
});

button.mount('#app');
```

---

## 📦 Package Structure

```
coolbuttons/
├── packages/
│   ├── react/
│   │   ├── src/
│   │   │   ├── buttons/          # 200+ button components
│   │   │   ├── index.ts          # Main export file
│   │   │   └── types.ts          # TypeScript types
│   │   ├── dist/                 # Build output
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── vanilla/
│       ├── src/
│       │   ├── index.ts          # CoolButton class & factory
│       │   └── types.ts
│       ├── dist/                 # Build output
│       ├── package.json
│       └── tsconfig.json
├── README.md
└── package.json
```

---

## 🔧 Development

### Setup

```bash
# Clone repository
git clone https://github.com/devchauhann/coolbuttons.git
cd coolbuttons

# Install dependencies
npm install

# Build packages
npm run build --workspaces

# Run development server
npm run dev
```

### Building

```bash
# Build all packages
npm run build --workspaces

# Build specific package
cd packages/react
npm run build
```

### Publishing

```bash
# Login to npm
npm login

# Publish packages
npm publish --workspace=packages/react --access public
npm publish --workspace=packages/vanilla --access public
```

For detailed publishing instructions, see [QUICK_PUBLISH.md](./QUICK_PUBLISH.md).

---

## 📊 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ iOS Safari (Latest)
- ✅ Android Chrome (Latest)

---

## ♿ Accessibility

All components follow WCAG 2.1 guidelines:

- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ✅ Color contrast compliant
- ✅ Focus indicators visible
- ✅ Semantic HTML

```jsx
// Accessible button usage
<Claymorphic
  onClick={handleClick}
  aria-label="Submit form"
  role="button"
  tabIndex={0}
>
  Submit
</Claymorphic>
```

---

## 🚀 Performance

- **Tree-shakeable**: Only import what you need
- **Small bundle**: ~50KB gzipped for React package
- **No dependencies**: Vanilla package has zero runtime dependencies
- **Optimized CSS**: Minimal CSS-in-JS overhead
- **Production ready**: Used in production applications

---

## 🎓 Examples

### React Example

```jsx
import React, { useState } from 'react';
import { 
  Claymorphic, 
  GlassCard, 
  NeonBorder,
  ModernMinimal 
} from '@coolbuttons/react';

export default function ButtonShowcase() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Cool Buttons Showcase</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <Claymorphic onClick={() => setClicked(!clicked)}>
          {clicked ? 'Clicked!' : 'Click Me'}
        </Claymorphic>

        <GlassCard onClick={() => alert('Glass Button!')}>
          Glass Card
        </GlassCard>

        <NeonBorder onClick={() => console.log('Neon!')}>
          Neon Border
        </NeonBorder>

        <ModernMinimal disabled>
          Disabled Button
        </ModernMinimal>
      </div>
    </div>
  );
}
```

### Vanilla JavaScript Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #app {
      display: flex;
      gap: 10px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import { createButton } from '@coolbuttons/vanilla';

    // Create and mount buttons
    createButton('claymorphic', {
      text: 'Claymorphic',
      onClick: () => alert('Claymorphic clicked!'),
    }).mount('#app');

    createButton('glasscard', {
      text: 'Glass Card',
      onClick: () => alert('Glass Card clicked!'),
    }).mount('#app');

    createButton('neumorphic', {
      text: 'Neumorphic',
      onClick: () => alert('Neumorphic clicked!'),
    }).mount('#app');
  </script>
</body>
</html>
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋 Support

- 📖 [Documentation](./NPM_PUBLISHING_GUIDE.md)
- 🐛 [Report Issues](https://github.com/devchauhann/coolbuttons/issues)
- 💬 [Discussions](https://github.com/devchauhann/coolbuttons/discussions)
- 📧 Email: devchauhan@example.com

---

## 🎉 Showcase

Built with Cool Buttons:
- Your Project 1
- Your Project 2
- Your Project 3

[Submit your project!](https://github.com/yourusername/coolbuttons/issues/new)

---

## 📈 Roadmap

- [ ] Add 50+ more button styles
- [ ] Vue 3 component library
- [ ] Svelte component library
- [ ] CSS-in-JS zero runtime implementation
- [ ] Interactive button builder tool
- [ ] Figma design system
- [ ] Component documentation website
- [ ] Storybook integration

---

## ✨ Credits

Created with ❤️ by [Dev Chauhan](https://github.com/devchauhann)

Inspired by modern design systems and beautiful UI components.

---

## 🔗 Links

- 🌐 [Website](https://coolbuttons.dev)
- 📦 [@coolbuttons/react on npm](https://www.npmjs.com/package/@coolbuttons/react)
- 📦 [@coolbuttons/vanilla on npm](https://www.npmjs.com/package/@coolbuttons/vanilla)
- 🐙 [GitHub Repository](https://github.com/devchauhann/coolbuttons)
- 🐦 [Twitter](https://twitter.com/devchauhann3)
- 💼 [LinkedIn](https://linkedin.com/in/devchauhann3)

---

**Made with ❤️ by Cool Buttons Team**

⭐ If you love Cool Buttons, please star the repository!
