# @coolbuttons/react

> A comprehensive collection of beautifully crafted React button components with TypeScript support.

[![npm version](https://img.shields.io/npm/v/@coolbuttons/react.svg)](https://www.npmjs.com/package/@coolbuttons/react)
[![npm downloads](https://img.shields.io/npm/dm/@coolbuttons/react.svg)](https://www.npmjs.com/package/@coolbuttons/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

---

## 📦 Installation

```bash
npm install @coolbuttons/react
# or
yarn add @coolbuttons/react
# or
pnpm add @coolbuttons/react
```

### Requirements

- React 16.8+ (for hooks support)
- React-DOM 16.8+

---

## 🚀 Quick Start

### Basic Usage

```jsx
import { Claymorphic } from '@coolbuttons/react';

export default function App() {
  return (
    <Claymorphic onClick={() => alert('Clicked!')}>
      Click Me
    </Claymorphic>
  );
}
```

### Multiple Buttons

```jsx
import { 
  Claymorphic, 
  GlassCard, 
  NeonBorder,
  ModernMinimal 
} from '@coolbuttons/react';

export default function ButtonGrid() {
  return (
    <div className="flex gap-4 p-8">
      <Claymorphic>Claymorphic</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
      <ModernMinimal>Modern Minimal</ModernMinimal>
    </div>
  );
}
```

---

## 📚 All Available Components

### Import Convention

```jsx
import { ButtonName } from '@coolbuttons/react';
```

### Complete Button List (200+)

**Glassmorphic:**
GlassCard, GlassDouble, GlassFrostedInner, GlassFrostyPill, GlassFusion, GlassGlow, GlassInset, GlassReflective, GlassRefraction, GlassStroke, DeepBlurGlass, EtherealBlur

**Neumorphic:**
NeumorphicSoft, NeumorphicConcave, NeumorphicConcavePill, NeumorphicDark, NeumorphicEmbossed, HighElevatedNeumorphic

**Cyberpunk:**
Cyberpunk, CyberBevel, CyberGlow, CyberGradient, CyberSlice, GlitchEffect, OutlineComet

**Modern & Minimal:**
ModernMinimal, ModernPrimary, MinimalArrow, MinimalBadge, MinimalPulse, InvertedMinimal, InvertedRound

**Liquid & Morph:**
LiquidFill, LiquidGradient, LiquidPrism, LiquidWarp, MorphingShape, GradientMorph

**Animated & Interactive:**
MagneticBorder, MagneticCircle, MagneticSoft, MagnifyHover, MagnifyText, FloatingPulse, FloatingLabel, ExpandingAura, ExpandingPill, BouncyIcon, IconBounce

**Retro & Vintage:**
Classic90s, OldTerminal, ArcadeGreen, DiagonalStripes, ChipBoard

**Gradient & Shadow:**
GradientShadow, DoubleShadow, IndependentShadow, InnerShadowDepth, ShadowGlow, FloatingShadow

**Neon & Glow:**
NeonBorder, NeonPill, NeonPulseRing, GlowGhost, GlowOutline, InnerGlow, InnerGlowPill

**Premium Effects:**
BentoBox, BorderBeam, BorderTrace, Brutalist, Claymorphic, ClaySoftPill, ContrastFrame, DashedReveal, DashRotate, DiamondCut, DotPattern, DualTone, ElevatedFloat, FragmentButton, GhostReveal, GlossyButton, GridOverlay, HandDrawn, Holographic, IndustrialPlate, LavaFlow, And 100+ more...

---

## 🎨 Component Props

All button components accept these props:

```typescript
interface ButtonProps {
  children?: React.ReactNode;      // Button text/content
  onClick?: () => void;             // Click handler function
  disabled?: boolean;               // Disable button state
  className?: string;               // Additional CSS classes
}
```

### Example with Props

```jsx
import { Claymorphic } from '@coolbuttons/react';

export function MyButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Claymorphic
      onClick={handleClick}
      disabled={false}
      className="w-full md:w-auto"
    >
      Submit
    </Claymorphic>
  );
}
```

---

## 🎯 Usage Examples

### E-commerce

```jsx
import { GlassCard, NeonBorder } from '@coolbuttons/react';

export function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <GlassCard onClick={() => addToCart(product)}>
        Add to Cart
      </GlassCard>
      <NeonBorder onClick={() => viewDetails(product)}>
        View Details
      </NeonBorder>
    </div>
  );
}
```

### Forms

```jsx
import { ModernMinimal, ModernPrimary } from '@coolbuttons/react';

export function LoginForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      
      <ModernPrimary type="submit">
        Login
      </ModernPrimary>
      
      <ModernMinimal type="button" onClick={() => reset()}>
        Reset
      </ModernMinimal>
    </form>
  );
}
```

---

## 🎨 Styling

### With Tailwind CSS

```jsx
import { Claymorphic } from '@coolbuttons/react';

export function TailwindButton() {
  return (
    <Claymorphic className="
      w-full 
      md:w-auto
      px-6 
      py-3
      text-lg 
      font-bold
      rounded-lg
    ">
      Tailwind Styled
    </Claymorphic>
  );
}
```

### With CSS Modules

```jsx
import { GlassCard } from '@coolbuttons/react';
import styles from './Button.module.css';

export function ModuleButton() {
  return (
    <GlassCard className={styles.primaryButton}>
      Module Styled
    </GlassCard>
  );
}
```

---

## ♿ Accessibility

All components follow WCAG 2.1 guidelines with proper keyboard support and screen reader compatibility.

---

## 📊 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari 12+
- ✅ iOS Safari 12+
- ✅ Android Chrome

---

## 🚀 Performance

- **Tree-shakeable**: Import only what you need
- **Small size**: ~50KB gzipped
- **No external CSS**: Styles are encapsulated
- **Optimized rendering**: Uses React best practices
- **Production ready**: Battle-tested

---

## 📄 License

MIT © 2026 Cool Buttons

---

## 🙋 Support

- 📖 [Full Documentation](https://github.com/devchauhann/coolbuttons)
- 🐛 [Report Issues](https://github.com/devchauhann/coolbuttons/issues)
- 💬 [Discussions](https://github.com/devchauhann/coolbuttons/discussions)
