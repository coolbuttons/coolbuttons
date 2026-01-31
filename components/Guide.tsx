import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

type GuideTab = 'react' | 'vanilla' | 'coolbuttons';

interface GuideProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (view: string) => void;
}

const Guide: React.FC<GuideProps> = ({ onBack, onNavigateHome, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<GuideTab>('react');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderReactGuide = () => (
    <div className="space-y-16">
      {/* Introduction */}
      <section>
        <h1 className="text-5xl font-black mb-4">React Guide</h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12">
          Cool Buttons React is a comprehensive collection of beautifully designed button components for React applications.
        </p>
      </section>

      {/* Installation */}
      <section id="installation">
        <h2 className="text-3xl font-bold mb-6">Installation</h2>
        <p className="text-zinc-300 mb-6">Install Cool Buttons React from npm:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">npm install @coolbuttons/react</code>
          </div>
          <button
            onClick={() => copyToClipboard('npm install @coolbuttons/react')}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === 'npm install @coolbuttons/react' ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Basic Usage */}
      <section id="basic-usage">
        <h2 className="text-3xl font-bold mb-6">Basic Usage</h2>
        <p className="text-zinc-300 mb-6">Import and use any button component in your React application:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { Claymorphic } from '@coolbuttons/react';

export default function App() {
  return (
    <Claymorphic onClick={() => alert('Clicked!')}>
      Click Me
    </Claymorphic>
  );
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { Claymorphic } from '@coolbuttons/react';

export default function App() {
  return (
    <Claymorphic onClick={() => alert('Clicked!')}>
      Click Me
    </Claymorphic>
  );
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { Claymorphic } from '@coolbuttons/react';

export default function App() {
  return (
    <Claymorphic onClick={() => alert('Clicked!')}>
      Click Me
    </Claymorphic>
  );
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Multiple Styles */}
      <section id="multiple-styles">
        <h2 className="text-3xl font-bold mb-6">Multiple Styles</h2>
        <p className="text-zinc-300 mb-6">Mix and match different button styles:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto max-h-64 overflow-y-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { Claymorphic, GlassCard, NeonBorder } from '@coolbuttons/react';

export default function Gallery() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Claymorphic>Claymorphic</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
    </div>
  );
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { Claymorphic, GlassCard, NeonBorder } from '@coolbuttons/react';

export default function Gallery() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Claymorphic>Claymorphic</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
    </div>
  );
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { Claymorphic, GlassCard, NeonBorder } from '@coolbuttons/react';

export default function Gallery() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Claymorphic>Claymorphic</Claymorphic>
      <GlassCard>Glass Card</GlassCard>
      <NeonBorder>Neon Border</NeonBorder>
    </div>
  );
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Form Buttons */}
      <section id="form-buttons">
        <h2 className="text-3xl font-bold mb-6">Form Buttons</h2>
        <p className="text-zinc-300 mb-6">Use the disabled prop to show loading states:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto max-h-64 overflow-y-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { ModernPrimary } from '@coolbuttons/react';
import { useState } from 'react';

export default function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ModernPrimary type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </ModernPrimary>
    </form>
  );
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { ModernPrimary } from '@coolbuttons/react';
import { useState } from 'react';

export default function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ModernPrimary type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </ModernPrimary>
    </form>
  );
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { ModernPrimary } from '@coolbuttons/react';
import { useState } from 'react';

export default function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ModernPrimary type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </ModernPrimary>
    </form>
  );
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Advanced Patterns */}
      <section id="advanced-patterns">
        <h2 className="text-3xl font-bold mb-6">Advanced Patterns</h2>
        <p className="text-zinc-300 mb-6">All buttons accept standard React button props and custom styling:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { NeonBorder } from '@coolbuttons/react';

export default function Advanced() {
  return (
    <NeonBorder
      className="px-8 py-4 text-lg"
      onClick={(e) => handleClick(e)}
      onMouseEnter={() => handleMouseEnter()}
    >
      Interactive Button
    </NeonBorder>
  );
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { NeonBorder } from '@coolbuttons/react';

export default function Advanced() {
  return (
    <NeonBorder
      className="px-8 py-4 text-lg"
      onClick={(e) => handleClick(e)}
      onMouseEnter={() => handleMouseEnter()}
    >
      Interactive Button
    </NeonBorder>
  );
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { NeonBorder } from '@coolbuttons/react';

export default function Advanced() {
  return (
    <NeonBorder
      className="px-8 py-4 text-lg"
      onClick={(e) => handleClick(e)}
      onMouseEnter={() => handleMouseEnter()}
    >
      Interactive Button
    </NeonBorder>
  );
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-3xl font-bold mb-6">Tips & Best Practices</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">All buttons are fully responsive out of the box</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Use className prop to customize size and padding</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Buttons work with TypeScript out of the box</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">All components are tree-shakeable for smaller bundles</span>
          </li>
        </ul>
      </section>
    </div>
  );

  const renderVanillaGuide = () => (
    <div className="space-y-16">
      {/* Introduction */}
      <section>
        <h1 className="text-5xl font-black mb-4">JavaScript Guide</h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12">
          Cool Buttons Vanilla JS is a zero-dependency library of button styles for any JavaScript project.
        </p>
      </section>

      {/* Installation */}
      <section id="installation">
        <h2 className="text-3xl font-bold mb-6">Installation</h2>
        <p className="text-zinc-300 mb-6">Install Cool Buttons from npm:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">npm install @coolbuttons/vanilla</code>
          </div>
          <button
            onClick={() => copyToClipboard('npm install @coolbuttons/vanilla')}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === 'npm install @coolbuttons/vanilla' ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Basic Usage */}
      <section id="basic-usage">
        <h2 className="text-3xl font-bold mb-6">Basic Usage</h2>
        <p className="text-zinc-300 mb-6">Include the CSS in your HTML file:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`<link rel="stylesheet" href="node_modules/coolbuttons/dist/styles.css">

<button class="cool-button clay-morphic">Click Me</button>`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`<link rel="stylesheet" href="node_modules/coolbuttons/dist/styles.css">

<button class="cool-button clay-morphic">Click Me</button>`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `<link rel="stylesheet" href="node_modules/coolbuttons/dist/styles.css">

<button class="cool-button clay-morphic">Click Me</button>` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Multiple Styles */}
      <section id="multiple-styles">
        <h2 className="text-3xl font-bold mb-6">Multiple Styles</h2>
        <p className="text-zinc-300 mb-6">Mix and match different button styles:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto max-h-64 overflow-y-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`<div class="flex gap-4">
  <button class="cool-button clay-morphic">Claymorphic</button>
  <button class="cool-button glass-card">Glass Card</button>
  <button class="cool-button neon-border">Neon Border</button>
</div>`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`<div class="flex gap-4">
  <button class="cool-button clay-morphic">Claymorphic</button>
  <button class="cool-button glass-card">Glass Card</button>
  <button class="cool-button neon-border">Neon Border</button>
</div>`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `<div class="flex gap-4">
  <button class="cool-button clay-morphic">Claymorphic</button>
  <button class="cool-button glass-card">Glass Card</button>
  <button class="cool-button neon-border">Neon Border</button>
</div>` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Event Handling */}
      <section id="event-handling">
        <h2 className="text-3xl font-bold mb-6">Event Handling</h2>
        <p className="text-zinc-300 mb-6">Add interactivity with event listeners:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto max-h-64 overflow-y-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`const button = document.querySelector('.cool-button');

button.addEventListener('click', function(e) {
  console.log('Button clicked!', e);
  this.classList.add('loading');
  
  // Simulate async operation
  setTimeout(() => {
    this.classList.remove('loading');
  }, 2000);
});`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`const button = document.querySelector('.cool-button');

button.addEventListener('click', function(e) {
  console.log('Button clicked!', e);
  this.classList.add('loading');
  
  // Simulate async operation
  setTimeout(() => {
    this.classList.remove('loading');
  }, 2000);
});`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `const button = document.querySelector('.cool-button');

button.addEventListener('click', function(e) {
  console.log('Button clicked!', e);
  this.classList.add('loading');
  
  // Simulate async operation
  setTimeout(() => {
    this.classList.remove('loading');
  }, 2000);
});` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Advanced Patterns */}
      <section id="advanced-patterns">
        <h2 className="text-3xl font-bold mb-6">Advanced Patterns</h2>
        <p className="text-zinc-300 mb-6">Create reusable button utilities:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto max-h-64 overflow-y-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`class CoolButton {
  constructor(selector, style) {
    this.button = document.querySelector(selector);
    this.button.classList.add('cool-button', style);
  }

  onClick(callback) {
    this.button.addEventListener('click', callback);
  }

  loading(isLoading) {
    this.button.disabled = isLoading;
    this.button.classList.toggle('loading', isLoading);
  }
}

// Usage
const btn = new CoolButton('button', 'neon-border');
btn.onClick(() => {
  btn.loading(true);
  setTimeout(() => btn.loading(false), 2000);
});`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`class CoolButton {
  constructor(selector, style) {
    this.button = document.querySelector(selector);
    this.button.classList.add('cool-button', style);
  }

  onClick(callback) {
    this.button.addEventListener('click', callback);
  }

  loading(isLoading) {
    this.button.disabled = isLoading;
    this.button.classList.toggle('loading', isLoading);
  }
}

// Usage
const btn = new CoolButton('button', 'neon-border');
btn.onClick(() => {
  btn.loading(true);
  setTimeout(() => btn.loading(false), 2000);
});`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `class CoolButton {
  constructor(selector, style) {
    this.button = document.querySelector(selector);
    this.button.classList.add('cool-button', style);
  }

  onClick(callback) {
    this.button.addEventListener('click', callback);
  }

  loading(isLoading) {
    this.button.disabled = isLoading;
    this.button.classList.toggle('loading', isLoading);
  }
}

// Usage
const btn = new CoolButton('button', 'neon-border');
btn.onClick(() => {
  btn.loading(true);
  setTimeout(() => btn.loading(false), 2000);
});` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-3xl font-bold mb-6">Tips & Best Practices</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Zero dependencies - just vanilla CSS and JavaScript</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Only 15KB gzipped for entire library</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Works with any framework or no framework</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Use CSS classes to customize and extend styles</span>
          </li>
        </ul>
      </section>
    </div>
  );

  const renderCoolbuttonsGuide = () => (
    <div className="space-y-16">
      {/* Introduction */}
      <section>
        <h1 className="text-5xl font-black mb-4">Universal Guide</h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12">
          Cool Buttons is a universal package that works with any JavaScript framework or standalone. Install once, use everywhere.
        </p>
      </section>

      {/* Installation */}
      <section id="installation">
        <h2 className="text-3xl font-bold mb-6">Installation</h2>
        <p className="text-zinc-300 mb-6">Install the universal Cool Buttons package from npm:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">npm install coolbuttons</code>
          </div>
          <button
            onClick={() => copyToClipboard('npm install coolbuttons')}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === 'npm install coolbuttons' ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* React Integration */}
      <section id="react-integration">
        <h2 className="text-3xl font-bold mb-6">React Integration</h2>
        <p className="text-zinc-300 mb-6">Use with React by importing from the react export:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { Claymorphic } from 'coolbuttons/react';

export default function App() {
  return <Claymorphic>Click Me</Claymorphic>;
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { Claymorphic } from 'coolbuttons/react';

export default function App() {
  return <Claymorphic>Click Me</Claymorphic>;
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { Claymorphic } from 'coolbuttons/react';

export default function App() {
  return <Claymorphic>Click Me</Claymorphic>;
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Vue Integration */}
      <section id="vue-integration">
        <h2 className="text-3xl font-bold mb-6">Vue Integration</h2>
        <p className="text-zinc-300 mb-6">Use with Vue by importing from the vue export:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import { Claymorphic } from 'coolbuttons/vue';

export default {
  components: { Claymorphic }
}
`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import { Claymorphic } from 'coolbuttons/vue';

export default {
  components: { Claymorphic }
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import { Claymorphic } from 'coolbuttons/vue';

export default {
  components: { Claymorphic }
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Vanilla JS Integration */}
      <section id="vanilla-integration">
        <h2 className="text-3xl font-bold mb-6">Vanilla JavaScript</h2>
        <p className="text-zinc-300 mb-6">Use with vanilla JavaScript by importing styles:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`import 'coolbuttons/vanilla/styles.css';

const button = document.createElement('button');
button.className = 'cool-button claymorphic';
button.textContent = 'Click Me';
document.body.appendChild(button);`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`import 'coolbuttons/vanilla/styles.css';

const button = document.createElement('button');
button.className = 'cool-button claymorphic';
button.textContent = 'Click Me';
document.body.appendChild(button);`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `import 'coolbuttons/vanilla/styles.css';

const button = document.createElement('button');
button.className = 'cool-button claymorphic';
button.textContent = 'Click Me';
document.body.appendChild(button);` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Tree Shaking */}
      <section id="tree-shaking">
        <h2 className="text-3xl font-bold mb-6">Tree Shaking</h2>
        <p className="text-zinc-300 mb-6">Import only the components you need for smaller bundle sizes:</p>
        <div className="relative group">
          <div className="bg-zinc-800/30 rounded-lg p-4 font-mono text-sm border border-zinc-700 overflow-x-auto">
            <code className="text-zinc-300 whitespace-pre leading-relaxed text-xs">{`// Only import what you use
import { Claymorphic, NeonBorder } from 'coolbuttons/react';

// This will only bundle these two components
export default function App() {
  return (
    <>
      <Claymorphic>Claymorphic</Claymorphic>
      <NeonBorder>Neon Border</NeonBorder>
    </>
  );
}`}</code>
          </div>
          <button
            onClick={() => copyToClipboard(`// Only import what you use
import { Claymorphic, NeonBorder } from 'coolbuttons/react';

// This will only bundle these two components
export default function App() {
  return (
    <>
      <Claymorphic>Claymorphic</Claymorphic>
      <NeonBorder>Neon Border</NeonBorder>
    </>
  );
}`)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-zinc-700 hover:bg-zinc-600 rounded"
          >
            {copiedCode === `// Only import what you use
import { Claymorphic, NeonBorder } from 'coolbuttons/react';

// This will only bundle these two components
export default function App() {
  return (
    <>
      <Claymorphic>Claymorphic</Claymorphic>
      <NeonBorder>Neon Border</NeonBorder>
    </>
  );
}` ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-300" />
            )}
          </button>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-3xl font-bold mb-6">Tips & Best Practices</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">One package works with React, Vue, Svelte, and Vanilla JS</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Tree-shakeable exports for optimal bundle sizes</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">TypeScript support included out of the box</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-500 font-bold text-lg">✓</span>
            <span className="text-zinc-300 leading-relaxed">Use framework-specific exports or vanilla CSS as needed</span>
          </li>
        </ul>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark flex flex-col">
      {/* Header */}
      <Header onNavigateHome={onNavigateHome} onNavigate={onNavigate} />

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-brand-light/95 dark:bg-brand-dark/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-6 py-4 font-bold text-sm uppercase tracking-widest border-b-2 transition-all ${
              activeTab === 'react'
                ? 'text-orange-500 border-orange-500'
                : 'text-zinc-500 dark:text-zinc-400 border-transparent hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setActiveTab('vanilla')}
            className={`px-6 py-4 font-bold text-sm uppercase tracking-widest border-b-2 transition-all ${
              activeTab === 'vanilla'
                ? 'text-orange-500 border-orange-500'
                : 'text-zinc-500 dark:text-zinc-400 border-transparent hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            JS
          </button>
          <button
            onClick={() => setActiveTab('coolbuttons')}
            className={`px-6 py-4 font-bold text-sm uppercase tracking-widest border-b-2 transition-all ${
              activeTab === 'coolbuttons'
                ? 'text-orange-500 border-orange-500'
                : 'text-zinc-500 dark:text-zinc-400 border-transparent hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Universal
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {activeTab === 'react' && renderReactGuide()}
          {activeTab === 'vanilla' && renderVanillaGuide()}
          {activeTab === 'coolbuttons' && renderCoolbuttonsGuide()}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Guide;
