# 📖 Cool Buttons - Complete Usage Guide

## Table of Contents

1. [Installation](#installation)
2. [React Usage](#react-usage)
3. [Vanilla JavaScript Usage](#vanilla-javascript-usage)
4. [Button Categories](#button-categories)
5. [Styling & Customization](#styling--customization)
6. [Advanced Usage](#advanced-usage)
7. [FAQ](#faq)

---

## 🔧 Installation

### React Package

```bash
npm install @coolbuttons/react
```

Requirements:
- React 16.8+
- React-DOM 16.8+

### Vanilla JavaScript Package

```bash
npm install @coolbuttons/vanilla
```

Requirements:
- None! Zero dependencies

### Install Both

```bash
npm install @coolbuttons/react @coolbuttons/vanilla
```

---

## ⚛️ React Usage

### Basic Import & Usage

```jsx
import { Claymorphic } from '@coolbuttons/react';

export default function App() {
  return (
    <Claymorphic onClick={() => alert('Hello!')}>
      Click Me
    </Claymorphic>
  );
}
```

### With Event Handlers

```jsx
import { GlassCard } from '@coolbuttons/react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log('Clicked! Count:', count + 1);
  };

  return (
    <GlassCard onClick={handleClick}>
      Clicked {count} times
    </GlassCard>
  );
}
```

### Multiple Buttons

```jsx
import { 
  Claymorphic, 
  GlassCard, 
  NeonBorder,
  NeumorphicSoft,
  Cyberpunk,
  ModernMinimal
} from '@coolbuttons/react';

export default function ButtonShowcase() {
  return (
    <div className="flex gap-4 p-8 flex-wrap">
      <Claymorphic>Claymorphic</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
      <NeumorphicSoft>Neumorphic</NeumorphicSoft>
      <Cyberpunk>Cyberpunk</Cyberpunk>
      <ModernMinimal>Modern</ModernMinimal>
    </div>
  );
}
```

### Button with Custom Styling

```jsx
import { Claymorphic } from '@coolbuttons/react';

export default function StyledButton() {
  return (
    <Claymorphic
      className="w-full px-8 py-4 text-lg font-bold text-white rounded-lg"
      onClick={() => console.log('Styled button clicked')}
    >
      Styled Button
    </Claymorphic>
  );
}
```

### Disabled State

```jsx
import { ModernPrimary } from '@coolbuttons/react';

export default function DisabledButton() {
  return (
    <ModernPrimary disabled>
      Disabled Button
    </ModernPrimary>
  );
}
```

### Button Group

```jsx
import { ModernMinimal, ModernPrimary } from '@coolbuttons/react';

export default function ButtonGroup() {
  return (
    <div className="flex gap-2">
      <ModernPrimary onClick={() => console.log('Save')}>
        Save
      </ModernPrimary>
      <ModernMinimal onClick={() => console.log('Cancel')}>
        Cancel
      </ModernMinimal>
    </div>
  );
}
```

### Form Submission

```jsx
import { GlassCard, ModernMinimal } from '@coolbuttons/react';
import { useState } from 'react';

export default function FormExample() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-4 py-2 border rounded"
      />
      <div className="flex gap-2">
        <GlassCard type="submit">
          Subscribe
        </GlassCard>
        <ModernMinimal 
          type="button"
          onClick={() => setEmail('')}
        >
          Clear
        </ModernMinimal>
      </div>
    </form>
  );
}
```

---

## 🚀 Vanilla JavaScript Usage

### Basic Usage

```javascript
import { createButton } from '@coolbuttons/vanilla';

const button = createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => alert('Hello!'),
});

button.mount('#app');
```

### Using CoolButton Class

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('My Button', {
  onClick: () => console.log('Clicked!'),
});

button.mount('#container');
```

### All Available Styles

```javascript
import { createButton } from '@coolbuttons/vanilla';

const styles = [
  'claymorphic',
  'glasscard',
  'neumorphic',
  'brutalist',
  'neonborder',
  'gradientshadow',
  'modernminimal',
];

// Create buttons for each style
styles.forEach((style) => {
  createButton(style, {
    text: style.charAt(0).toUpperCase() + style.slice(1),
    onClick: () => console.log(`${style} clicked`),
  }).mount('#buttons');
});
```

### Dynamic Button Creation

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const actions = [
  { label: 'Save', action: () => saveData() },
  { label: 'Delete', action: () => deleteData() },
  { label: 'Edit', action: () => editData() },
  { label: 'Cancel', action: () => cancelAction() },
];

const container = document.getElementById('actions');

actions.forEach(({ label, action }) => {
  new CoolButton(label, {
    onClick: action,
  }).mount(container);
});
```

### Update Button Text

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Loading...', {
  onClick: () => console.log('Loading complete!'),
});

button.mount('#app');

// Update text after some action
setTimeout(() => {
  button.setText('Click Me Again!');
}, 2000);
```

### Toggle Disabled State

```javascript
import { createButton } from '@coolbuttons/vanilla';

const submitBtn = createButton('claymorphic', {
  text: 'Submit',
  onClick: async () => {
    submitBtn.setDisabled(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    submitBtn.setText('Submitted!');
    submitBtn.setDisabled(false);
  },
});

submitBtn.mount('#app');
```

### Custom Styling

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Custom Style', {
  style: `
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  `,
  onClick: () => alert('Custom styled button!'),
});

button.mount('#app');
```

### Button with Custom Class

```javascript
import { createButton } from '@coolbuttons/vanilla';

const button = createButton('claymorphic', {
  text: 'Button with Class',
  className: 'my-custom-button',
  onClick: () => console.log('Clicked!'),
});

button.mount('#app');

// CSS
const style = document.createElement('style');
style.textContent = `
  .my-custom-button {
    font-size: 18px !important;
    font-weight: bold !important;
  }
`;
document.head.appendChild(style);
```

### Remove Button

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Remove Me', {
  onClick: () => {
    console.log('Button removed!');
    button.remove();
  },
});

button.mount('#app');
```

### Get Button Element

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('My Button');
button.mount('#app');

const element = button.getElement();
console.log(element); // HTMLButtonElement

// Add additional attributes
element.setAttribute('data-id', '123');
element.setAttribute('aria-label', 'Action button');
```

---

## 🎨 Button Categories

### Glassmorphic Buttons

Modern, transparent design with frosted glass effect.

**React:**
```jsx
import { GlassCard, GlassFrostyPill, GlassInset } from '@coolbuttons/react';

<GlassCard>Glass Card</GlassCard>
<GlassFrostyPill>Frosty Pill</GlassFrostyPill>
<GlassInset>Glass Inset</GlassInset>
```

**Vanilla:**
```javascript
createButton('glasscard', { text: 'Glass Card' }).mount('#app');
```

### Neumorphic Buttons

Soft, embossed design with subtle shadows.

**React:**
```jsx
import { NeumorphicSoft, NeumorphicDark } from '@coolbuttons/react';

<NeumorphicSoft>Soft</NeumorphicSoft>
<NeumorphicDark>Dark</NeumorphicDark>
```

**Vanilla:**
```javascript
createButton('neumorphic', { text: 'Neumorphic' }).mount('#app');
```

### Cyberpunk Buttons

Bold, futuristic design with neon effects.

**React:**
```jsx
import { Cyberpunk, CyberGlow, NeonBorder } from '@coolbuttons/react';

<Cyberpunk>Cyberpunk</Cyberpunk>
<CyberGlow>Glow</CyberGlow>
<NeonBorder>Neon</NeonBorder>
```

**Vanilla:**
```javascript
createButton('neonborder', { text: 'Neon' }).mount('#app');
```

### Modern & Minimal

Clean, professional design for business applications.

**React:**
```jsx
import { ModernMinimal, ModernPrimary } from '@coolbuttons/react';

<ModernMinimal>Minimal</ModernMinimal>
<ModernPrimary>Primary</ModernPrimary>
```

**Vanilla:**
```javascript
createButton('modernminimal', { text: 'Modern' }).mount('#app');
```

### Retro & Vintage

Classic 90s style and vintage designs.

**React:**
```jsx
import { Classic90s, OldTerminal, ArcadeGreen } from '@coolbuttons/react';

<Classic90s>90s Style</Classic90s>
<OldTerminal>Terminal</OldTerminal>
<ArcadeGreen>Arcade</ArcadeGreen>
```

---

## 🎨 Styling & Customization

### React with Tailwind CSS

```jsx
import { Claymorphic } from '@coolbuttons/react';

export default function TailwindButton() {
  return (
    <Claymorphic className="
      px-6
      py-3
      text-lg
      font-bold
      text-white
      bg-blue-500
      rounded-lg
      hover:bg-blue-600
      transition-colors
      w-full
      md:w-auto
    ">
      Tailwind Button
    </Claymorphic>
  );
}
```

### React with CSS Modules

```jsx
import { GlassCard } from '@coolbuttons/react';
import styles from './Button.module.css';

export default function ModuleButton() {
  return (
    <GlassCard className={`${styles.button} ${styles.primary}`}>
      Module Styled
    </GlassCard>
  );
}
```

```css
/* Button.module.css */
.button {
  font-size: 16px;
  padding: 12px 24px;
}

.primary {
  color: #007bff;
  font-weight: bold;
}
```

### React with Inline Styles

```jsx
import { NeonBorder } from '@coolbuttons/react';

export default function InlineStyleButton() {
  const buttonStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 24px',
    backgroundColor: '#000',
    color: '#0f0',
    border: '2px solid #0f0',
  };

  return (
    <NeonBorder style={buttonStyle}>
      Inline Styled
    </NeonBorder>
  );
}
```

### Vanilla with CSS

```html
<style>
  .custom-cool-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .custom-cool-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
</style>

<div id="app"></div>

<script type="module">
  import { createButton } from '@coolbuttons/vanilla';

  createButton('claymorphic', {
    text: 'Custom Styled',
    className: 'custom-cool-button',
  }).mount('#app');
</script>
```

---

## 🔧 Advanced Usage

### React Modal Buttons

```jsx
import { GlassCard, ModernMinimal } from '@coolbuttons/react';
import { useState } from 'react';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassCard onClick={() => setIsOpen(true)}>
        Open Modal
      </GlassCard>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Action</h2>
            <div className="flex gap-4">
              <GlassCard onClick={() => {
                console.log('Confirmed');
                setIsOpen(false);
              }}>
                Confirm
              </GlassCard>
              <ModernMinimal onClick={() => setIsOpen(false)}>
                Cancel
              </ModernMinimal>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

### React Loading Button

```jsx
import { Claymorphic } from '@coolbuttons/react';
import { useState } from 'react';

export default function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Loaded!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Claymorphic
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Click Me'}
    </Claymorphic>
  );
}
```

### Vanilla Button Group

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const container = document.getElementById('button-group');

const buttons = [
  { text: 'Button 1', action: () => console.log('1') },
  { text: 'Button 2', action: () => console.log('2') },
  { text: 'Button 3', action: () => console.log('3') },
];

buttons.forEach(({ text, action }) => {
  new CoolButton(text, {
    onClick: action,
    style: 'margin: 5px;',
  }).mount(container);
});
```

### Vanilla Toggle Button

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

let isActive = false;
const button = new CoolButton('Toggle Me', {
  onClick: () => {
    isActive = !isActive;
    button.setText(isActive ? 'Active' : 'Inactive');
  },
});

button.mount('#app');
```

---

## ❓ FAQ

### Q: Can I use Cool Buttons in both React and Vanilla?

**A:** Yes! Install both packages and use whichever fits your needs in different parts of your project.

```bash
npm install @coolbuttons/react @coolbuttons/vanilla
```

### Q: Can I customize the button styles?

**A:** Absolutely! Use className, inline styles, or CSS modules to customize any button.

### Q: What's the difference between React and Vanilla packages?

**A:**
- **React**: Full React component library, use as JSX components
- **Vanilla**: Zero-dependency JS library, use programmatically

### Q: How many button styles are available?

**A:** Over 200 unique button styles! Check both packages for all options.

### Q: Are buttons accessible?

**A:** Yes! All buttons follow WCAG 2.1 guidelines.

### Q: Can I disable buttons?

**A:**
- React: `<Button disabled />`
- Vanilla: `button.setDisabled(true)`

### Q: How do I handle click events?

**A:**
- React: `<Button onClick={handler} />`
- Vanilla: `new CoolButton(text, { onClick: handler })`

### Q: What about TypeScript?

**A:** Both packages include full TypeScript support!

### Q: Can I use Cool Buttons with Next.js?

**A:** Yes! Just import and use normally in your components.

### Q: What about performance?

**A:** Both packages are optimized for performance. React package is ~50KB gzipped, Vanilla is ~15KB gzipped.

### Q: Can I contribute new button styles?

**A:** Yes! Visit the GitHub repository to contribute.

---

## 🤝 Need More Help?

- 📖 [Main README](../README.md)
- 📦 [@coolbuttons/react](https://www.npmjs.com/package/@coolbuttons/react)
- 📦 [@coolbuttons/vanilla](https://www.npmjs.com/package/@coolbuttons/vanilla)
- 🐛 [Report Issues](https://github.com/devchauhann/coolbuttons/issues)
- 💬 [Discussions](https://github.com/devchauhann/coolbuttons/discussions)

---

**Happy button clicking! 🎉**
