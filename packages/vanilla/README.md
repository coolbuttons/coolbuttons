<div align="center">
  <img src="https://raw.githubusercontent.com/coolbuttons/coolbuttons/refs/heads/main/public/package-icon/icon.png" alt="Cool Buttons Vanilla" width="120" height="120">
  
  # @coolbuttons/vanilla
  
  Zero-dependency JavaScript button library with 7+ pre-built styles
  
  [![npm version](https://img.shields.io/npm/v/@coolbuttons/vanilla.svg)](https://www.npmjs.com/package/@coolbuttons/vanilla)
  [![npm downloads](https://img.shields.io/npm/dm/@coolbuttons/vanilla.svg)](https://www.npmjs.com/package/@coolbuttons/vanilla)
</div>

---

## ✨ Features

- **Zero Dependencies** - Pure JavaScript, nothing else needed
- **Small Size** - Only 23KB gzipped
- **7+ Pre-built Styles** - Production-ready components
- **Fully Customizable** - Easy to extend with CSS
- **Accessible** - WCAG compliant
- **Responsive** - Works on all devices

---

## 📦 Installation

```bash
npm install @coolbuttons/vanilla
```

---

## 🚀 Quick Start

### Basic Usage

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Create a button
const button = createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Clicked!'),
});

// Mount to DOM
button.mount('#app');
```

### CDN Usage

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/@coolbuttons/vanilla@1.0.5/dist/coolbuttons.min.js"></script>
<script>
  const { createButton } = window.CoolButtonsVanilla;
  
  createButton('claymorphic', {
    text: 'Click Me!',
    onClick: () => alert('Clicked!'),
  }).mount('#app');
</script>
```

---

## 💡 Usage Examples

### Multiple Button Styles

```javascript
import { createButton } from '@coolbuttons/vanilla';

// Create different button styles
createButton('claymorphic', { text: 'Claymorphic', onClick: () => console.log('1') }).mount('#app');
createButton('glasscard', { text: 'Glass Card', onClick: () => console.log('2') }).mount('#app');
createButton('neumorphic', { text: 'Neumorphic', onClick: () => console.log('3') }).mount('#app');
createButton('brutalist', { text: 'Brutalist', onClick: () => console.log('4') }).mount('#app');
createButton('neonborder', { text: 'Neon Border', onClick: () => console.log('5') }).mount('#app');
createButton('gradientshadow', { text: 'Gradient Shadow', onClick: () => console.log('6') }).mount('#app');
createButton('modernminimal', { text: 'Modern Minimal', onClick: () => console.log('7') }).mount('#app');
```

### Dynamic Button Creation

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

// Create buttons dynamically
const actions = ['Save', 'Delete', 'Edit'];

actions.forEach((text) => {
  new CoolButton(text, {
    onClick: () => console.log(`${text} clicked!`),
  }).mount('#buttons');
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
  `,
  onClick: () => console.log('Custom button clicked!'),
});

button.mount('#app');
```

### Form Integration

```javascript
import { createButton } from '@coolbuttons/vanilla';

const form = document.getElementById('myForm');

createButton('brutalist', {
  text: 'Submit',
  onClick: () => form.submit(),
}).mount('#form-controls');

createButton('modernminimal', {
  text: 'Reset',
  onClick: () => form.reset(),
}).mount('#form-controls');
```

---

## 🎨 API Reference

### `createButton(style, options)`

Factory function for creating buttons with pre-built styles.

```javascript
createButton('claymorphic', {
  text: 'Click Me!',
  onClick: () => console.log('Clicked!'),
  disabled: false,
  className: 'custom-class',
  id: 'my-button',
}).mount('#app');
```

**Available Styles:** `claymorphic` | `glasscard` | `neumorphic` | `brutalist` | `neonborder` | `gradientshadow` | `modernminimal`

**Options:**
- `text` - Button text
- `onClick` - Click handler function
- `disabled` - Disable state (boolean)
- `className` - Additional CSS classes
- `style` - Custom inline CSS
- `id` - Element ID

### `CoolButton` Class

Direct class for maximum control.

```javascript
import { CoolButton } from '@coolbuttons/vanilla';

const button = new CoolButton('My Button', {
  onClick: () => console.log('Clicked!'),
  style: 'padding: 10px 20px; background: #3498db;',
});

// Methods
button.mount('#app');                    // Mount to DOM
button.setText('New Text');              // Update text
button.setDisabled(true);                // Disable button
button.onClick(() => {});                // Set click handler
button.getElement();                     // Get DOM element
button.remove();                         // Remove from DOM
```

---

## 📚 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari 11+
- iOS Safari 11+
- Android Chrome

---

## 🔗 Links

- **[GitHub](https://github.com/coolbuttons/coolbuttons)** - Source code
- **[NPM](https://www.npmjs.com/package/@coolbuttons/vanilla)** - Package registry
- **[@coolbuttons/react](https://www.npmjs.com/package/@coolbuttons/react)** - React version

---

## 📄 License

MIT © 2026 Cool Buttons

<div align="center">
  Made with ❤️ by the Cool Buttons team
</div>
