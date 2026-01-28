# @coolbuttons/vanilla

> Zero-dependency JavaScript button library with 7+ pre-built styles. Perfect for vanilla JavaScript projects, no framework required.

[![npm version](https://img.shields.io/npm/v/@coolbuttons/vanilla.svg)](https://www.npmjs.com/package/@coolbuttons/vanilla)
[![npm downloads](https://img.shields.io/npm/dm/@coolbuttons/vanilla.svg)](https://www.npmjs.com/package/@coolbuttons/vanilla)

---

## ✨ Features

- 🚀 **Zero Dependencies** - Pure JavaScript, nothing to install except this package
- 📦 **Small Size** - Only 15KB gzipped
- 🎨 **Pre-built Styles** - 7 production-ready button styles included
- 🔧 **Customizable** - Easy to extend with your own styles
- ♿ **Accessible** - WCAG compliant components
- 📱 **Responsive** - Works on all devices
- 💪 **Powerful API** - Full control over button behavior
- ⚡ **Fast** - No overhead, direct DOM manipulation

---

## 📦 Installation

```bash
npm install @coolbuttons/vanilla
# or
yarn add @coolbuttons/vanilla
# or
pnpm add @coolbuttons/vanilla
```

**No other dependencies required!**

---

## 🚀 Quick Start

### Basic Usage with Factory Function

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Create a button
const button = createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Clicked!'),
});

// Mount to DOM
button.mount('#container');
```

### Using the CoolButton Class

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('My Button', {
  style: `
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `,
  onClick: () => alert('Hello!'),
});

button.mount('#app');
```

---

## 📚 Available Pre-built Styles

### 1. Claymorphic

```javascript
createButton('claymorphic', {
  text: 'Claymorphic Button',
  onClick: () => console.log('Clicked!'),
}).mount('#app');
```

Modern clay-like design with soft shadows and smooth transitions.

### 2. Glass Card

```javascript
createButton('glasscard', {
  text: 'Glass Card Button',
}).mount('#app');
```

Glassmorphism design with frosted glass effect.

### 3. Neumorphic

```javascript
createButton('neumorphic', {
  text: 'Neumorphic Button',
}).mount('#app');
```

Soft neumorphic design with embossed effect.

### 4. Brutalist

```javascript
createButton('brutalist', {
  text: 'Brutalist Button',
}).mount('#app');
```

Minimal brutalist design with bold borders.

### 5. Neon Border

```javascript
createButton('neonborder', {
  text: 'Neon Border Button',
}).mount('#app');
```

Cyberpunk-inspired neon border effect.

### 6. Gradient Shadow

```javascript
createButton('gradientshadow', {
  text: 'Gradient Shadow Button',
}).mount('#app');
```

Modern gradient with dramatic shadow effect.

### 7. Modern Minimal

```javascript
createButton('modernminimal', {
  text: 'Modern Minimal Button',
}).mount('#app');
```

Clean, minimal modern design.

---

## 🎨 API Reference

### createButton(style, options)

Factory function for creating buttons with pre-built styles.

**Parameters:**

- `style` (string) - Style name: 'claymorphic' | 'glasscard' | 'neumorphic' | 'brutalist' | 'neonborder' | 'gradientshadow' | 'modernminimal'
- `options` (object) - Configuration options

**Options:**

```typescript
{
  text?: string;              // Button text
  onClick?: () => void;       // Click handler
  disabled?: boolean;         // Disable state
  className?: string;         // Additional CSS classes
  style?: string;             // Custom CSS styles
  id?: string;                // Element ID
}
```

**Returns:** CoolButton instance

---

### CoolButton Class

Direct class for maximum control.

#### Constructor

```javascript
new CoolButton(text, options)
```

**Parameters:**

- `text` (string) - Button text
- `options` (object) - Configuration options

#### Methods

##### `mount(selector | element)`

Mount button to DOM.

```javascript
const button = new CoolButton('My Button');

// Mount to selector
button.mount('#app');

// Mount to element
button.mount(document.getElementById('app'));

// Mount to body
button.mount(document.body);
```

##### `setText(text)`

Update button text.

```javascript
button.setText('New Text');
```

##### `setDisabled(disabled)`

Enable/disable button.

```javascript
button.setDisabled(true);   // Disable
button.setDisabled(false);  // Enable
```

##### `onClick(callback)`

Set click handler.

```javascript
button.onClick(() => {
  console.log('Button clicked!');
});
```

##### `getElement()`

Get the DOM element.

```javascript
const element = button.getElement();
console.log(element); // HTMLButtonElement
```

##### `remove()`

Remove button from DOM.

```javascript
button.remove();
```

---

## 🎯 Usage Examples

### HTML Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>Cool Buttons Demo</title>
</head>
<body>
  <div id="buttons"></div>

  <script type="module">
    import { createButton } from '@coolbuttons/vanilla';

    // Create multiple buttons
    createButton('claymorphic', {
      text: 'Claymorphic',
      onClick: () => alert('Claymorphic clicked!'),
    }).mount('#buttons');

    createButton('glasscard', {
      text: 'Glass Card',
      onClick: () => alert('Glass clicked!'),
    }).mount('#buttons');

    createButton('neumorphic', {
      text: 'Neumorphic',
      onClick: () => alert('Neumorphic clicked!'),
    }).mount('#buttons');
  </script>
</body>
</html>
```

### Dynamic Button Creation

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

// Create buttons dynamically
const items = ['Save', 'Delete', 'Edit'];

items.forEach((text) => {
  new CoolButton(text, {
    onClick: () => console.log(`${text} clicked!`),
  }).mount('#app');
});
```

### With Custom Styling

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Custom Button', {
  style: `
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
  `,
  onClick: () => console.log('Custom button clicked!'),
});

button.mount('#app');
```

### Conditional Rendering

```javascript
import { createButton } from '@coolbuttons/vanilla';

function createUserButton(user) {
  if (user.isPremium) {
    return createButton('gradientshadow', {
      text: 'Premium User',
      onClick: () => showPremiumOptions(),
    });
  } else {
    return createButton('modernminimal', {
      text: 'Upgrade Now',
      onClick: () => showUpgradeOptions(),
    });
  }
}

createUserButton(currentUser).mount('#app');
```

### Form Integration

```javascript
import { createButton } from '@coolbuttons/vanilla';

const form = document.getElementById('myForm');

const submitBtn = createButton('brutalist', {
  text: 'Submit',
  onClick: () => form.submit(),
}).mount('#form-controls');

const resetBtn = createButton('modernminimal', {
  text: 'Reset',
  onClick: () => form.reset(),
}).mount('#form-controls');
```

---

## 🎨 Custom Styling

### Override with CSS Class

```html
<style>
  .custom-button {
    background-color: #ff6b6b !important;
    font-size: 18px !important;
  }
</style>

<script type="module">
  import { createButton } from '@coolbuttons/vanilla';

  createButton('claymorphic', {
    text: 'Custom Styled',
    className: 'custom-button',
  }).mount('#app');
</script>
```

### Complete Custom Style

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('My Style', {
  style: `
    /* Your custom CSS */
    padding: 12px 24px;
    background: #000;
    color: #0f0;
    border: 2px solid #0f0;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  `,
});

button.mount('#app');
```

---

## ♿ Accessibility

All buttons are accessible by default:

- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ✅ Proper ARIA labels
- ✅ Focus indicators
- ✅ Disabled state support

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('Accessible Button', {
  onClick: () => console.log('Clicked'),
});

// Get DOM element for additional ARIA attributes
const element = button.getElement();
element.setAttribute('aria-label', 'Important action');
element.setAttribute('role', 'button');

button.mount('#app');
```

---

## 📊 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari 11+
- ✅ iOS Safari 11+
- ✅ Android Chrome
- ✅ IE 11+ (with polyfills)

---

## 🚀 Performance

- **Tiny Bundle**: Only 15KB gzipped
- **Zero Dependencies**: No npm packages required
- **Fast Rendering**: Direct DOM manipulation
- **Optimized**: No virtual DOM overhead

---

## 🔗 Integration Examples

### With Webpack

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Just works!
createButton('claymorphic', {
  text: 'My Button',
}).mount('#app');
```

### With Vite

```javascript
import { createButton } from '@coolbuttons/vanilla';

createButton('glasscard', {
  text: 'Vite Button',
}).mount('#app');
```

### With HTML (CDN)

```html
<script type="module">
  // ESM import
  import { createButton } from 'https://cdn.jsdelivr.net/npm/@coolbuttons/vanilla@latest/dist/index.esm.js';

  createButton('neumorphic', {
    text: 'CDN Button',
  }).mount('#app');
</script>
```

---

## 🎓 TypeScript Support

```typescript
import { CoolButton, CreateButtonOptions } from '@coolbuttons/vanilla';

const options: CreateButtonOptions = {
  text: 'TypeScript Button',
  onClick: () => console.log('Clicked'),
  disabled: false,
};

const button = new CoolButton('My Button', options);
button.mount('#app');
```

---

## 🔗 Related

- [@coolbuttons/react](https://www.npmjs.com/package/@coolbuttons/react) - React version
- [Main Repository](https://github.com/devchauhann/coolbuttons)

---

## 📄 License

MIT © 2026 Cool Buttons

---

## 🙋 Support

- 📖 [Full Documentation](https://github.com/devchauhann/coolbuttons)
- 🐛 [Report Issues](https://github.com/devchauhann/coolbuttons/issues)
- 💬 [Discussions](https://github.com/devchauhann/coolbuttons/discussions)

---

**Zero dependencies, maximum power! 🚀**

## API

### `CoolButton` Class

```javascript
const button = new CoolButton(options);

// Methods
button.getElement(): HTMLButtonElement;
button.setText(text: string): void;
button.setDisabled(disabled: boolean): void;
button.addClassName(className: string): void;
button.removeClassName(className: string): void;
button.onClick(callback: () => void): void;
button.mount(container: string | HTMLElement): void;
```

### `createButton` Function

```javascript
const button = createButton(style, options);
```

## Options

```javascript
{
  text?: string;           // Button text
  onClick?: () => void;    // Click handler
  disabled?: boolean;      // Disabled state
  className?: string;      // Additional CSS classes
  id?: string;             // Element ID
  title?: string;          // Button title
}
```

## HTML Integration

```html
<div id="button-container"></div>

<script type="module">
  import { createButton } from '@coolbuttons/vanilla';

  const btn = createButton('claymorphic', {
    text: 'Submit',
    onClick: () => {
      console.log('Form submitted!');
    },
  });

  btn.mount('#button-container');
</script>
```

## Customization

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton({
  text: 'Custom Button',
  className: 'px-8 py-4 bg-purple-500 text-white rounded-lg',
});

button.mount('#app');

// Add additional classes
button.addClassName('shadow-lg');

// Change text
button.setText('Updated');

// Disable button
button.setDisabled(true);
```

## License

MIT

## Support

For issues and questions, visit [GitHub](https://github.com/devchauhann/coolbuttons)
