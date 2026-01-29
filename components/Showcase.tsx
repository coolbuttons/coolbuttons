import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Claymorphic from './buttons/Claymorphic';

interface ShowcaseProps {
  onBack: () => void;
}

const buttonStyles = [
  { name: 'Claymorphic', component: Claymorphic },
];

const calculateHueRotate = (hexColor: string): number => {
  // Orange (#f97316) is the base color with hue around 38 degrees
  // Calculate the hue of the target color
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Convert RGB to HSL to get hue
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;

  if (max !== min) {
    const d = max - min;
    switch (max) {
      case rNorm:
        h = (((gNorm - bNorm) / d) % 6) * 60;
        break;
      case gNorm:
        h = (((bNorm - rNorm) / d) + 2) * 60;
        break;
      case bNorm:
        h = (((rNorm - gNorm) / d) + 4) * 60;
        break;
    }
    if (h < 0) h += 360;
  }

  // Orange base is approximately 38 degrees
  const orangeHue = 38;
  const targetHue = h;
  const rotation = targetHue - orangeHue;

  return rotation;
};

const templates = [
  {
    id: 'saas',
    name: 'Dashboard',
    description: 'Dashboard landing page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-lg space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Welcome</h3>
          <p className="text-zinc-400 max-w-md">Manage your work with ease and simplicity.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2">
            <ButtonComponent>Start</ButtonComponent>
          </div>
          <div className="flex gap-2">
            <ButtonComponent>Learn</ButtonComponent>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-zinc-700">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><div className="text-2xl font-bold text-white">Users</div><div className="text-xs text-zinc-500">Active</div></div>
            <div><div className="text-2xl font-bold text-white">Uptime</div><div className="text-xs text-zinc-500">Reliable</div></div>
            <div><div className="text-2xl font-bold text-white">Support</div><div className="text-xs text-zinc-500">Always</div></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ecommerce',
    name: 'Store',
    description: 'Product showcase page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-white text-gray-900 p-8 rounded-lg space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Premium Product</h3>
          <p className="text-gray-600">Quality and craftsmanship combined</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">Price</span>
            <span className="text-lg line-through text-gray-500">Discount</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            <ButtonComponent>Add</ButtonComponent>
          </div>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">♥</button>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">✓ Shipping  ✓ Returns  ✓ Warranty</p>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'Contact form page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg space-y-6 text-white">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-blue-100">Send us a message</p>
        </div>
        <div className="space-y-4 bg-black/30 p-4 rounded">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400" />
          <textarea placeholder="Message" rows={3} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"></textarea>
        </div>
        <div className="flex gap-2">
          <ButtonComponent>Send</ButtonComponent>
        </div>
      </div>
    )
  },
  {
    id: 'pricing',
    name: 'Pricing',
    description: 'Pricing page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-200">
        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Plan</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">Price</span>
            <span className="text-gray-600">Monthly</span>
          </div>
        </div>
        <ul className="space-y-2 mb-6 text-gray-700">
          <li>✓ Projects</li>
          <li>✓ Support</li>
          <li>✓ Analytics</li>
          <li>✓ Branding</li>
        </ul>
        <div className="flex gap-2">
          <ButtonComponent>Subscribe</ButtonComponent>
        </div>
      </div>
    )
  },
  {
    id: 'blog',
    name: 'Article',
    description: 'Article page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-white text-gray-900 p-8 rounded-lg space-y-6 max-w-2xl">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Web Design Tips</h3>
          <p className="text-gray-600 text-sm">Published recently • Read</p>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Modern web design combines aesthetics with functionality. From dark mode interfaces to interactive components, the designs are evolving.
          </p>
        </div>
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <ButtonComponent>Read</ButtonComponent>
          <ButtonComponent>Share</ButtonComponent>
        </div>
      </div>
    )
  },
];

const Showcase: React.FC<ShowcaseProps> = ({ onBack }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [selectedButtonStyle, setSelectedButtonStyle] = useState(0);
  const [buttonColor, setButtonColor] = useState('#f97316');

  const template = templates[selectedTemplate];
  
  // Create a wrapper component that applies the color to Claymorphic button
  const ColoredButtonComponent = (props: any) => {
    return (
      <div style={{
        '--button-color': buttonColor,
      } as React.CSSProperties & { '--button-color': string }}>
        <style>{`
          .colored-claymorphic button {
            background-color: var(--button-color) !important;
            background-image: none !important;
          }
          .colored-claymorphic button:hover {
            background-color: var(--button-color) !important;
            filter: brightness(1.1);
          }
        `}</style>
        <div className="colored-claymorphic">
          <Claymorphic>{props.children || 'Button'}</Claymorphic>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <Header 
        onNavigateHome={onBack}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-2">Showcase</h1>
          <p className="text-zinc-400 text-lg">See buttons in templates and swap styles to see how different designs fit different uses.</p>
        </div>

        {/* Template Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Templates</h2>
          <div className="grid md:grid-cols-5 gap-3">
            {templates.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplate(idx)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  selectedTemplate === idx
                    ? 'border-orange-500 bg-orange-500/10'
                    : 'border-zinc-700 hover:border-zinc-600'
                }`}
              >
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-zinc-400 mt-1">{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Color</h2>
          <label className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg cursor-pointer transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
            <span>Pick:</span>
            <div 
              className="w-8 h-8 rounded-md border-2 border-white shadow-md transition-all"
              style={{ backgroundColor: buttonColor }}
            />
            <span className="text-sm font-mono ml-2">{buttonColor}</span>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="w-0 h-0 opacity-0 cursor-pointer"
            />
          </label>
        </div>

        {/* Live Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Preview</h2>
          <div className="bg-black/50 border border-zinc-800 rounded-2xl p-8">
            {template.preview(ColoredButtonComponent)}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Showcase;
