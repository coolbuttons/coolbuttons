import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';
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
    name: 'SaaS Dashboard',
    description: 'Modern software-as-a-service dashboard landing page',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-lg space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Welcome to Dashboard</h3>
          <p className="text-zinc-400 max-w-md">Manage your business with powerful analytics and insights.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2">
            <ButtonComponent>Get Started</ButtonComponent>
          </div>
          <div className="flex gap-2">
            <ButtonComponent>Learn More</ButtonComponent>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-zinc-700">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><div className="text-2xl font-bold text-white">1.2M+</div><div className="text-xs text-zinc-500">Users</div></div>
            <div><div className="text-2xl font-bold text-white">99.9%</div><div className="text-xs text-zinc-500">Uptime</div></div>
            <div><div className="text-2xl font-bold text-white">24/7</div><div className="text-xs text-zinc-500">Support</div></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    description: 'Online shopping experience with product showcase',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-white text-gray-900 p-8 rounded-lg space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Premium Headphones</h3>
          <p className="text-gray-600">High-quality sound with noise cancellation</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">$299</span>
            <span className="text-lg line-through text-gray-500">$399</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            <ButtonComponent>Add to Cart</ButtonComponent>
          </div>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">♥</button>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">✓ Free Shipping  ✓ 30-Day Returns  ✓ 1-Year Warranty</p>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    name: 'Contact Form',
    description: 'Customer support and contact page template',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg space-y-6 text-white">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-blue-100">We'd love to hear from you. Send us a message!</p>
        </div>
        <div className="space-y-4 bg-black/30 p-4 rounded">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400" />
          <textarea placeholder="Message" rows={3} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"></textarea>
        </div>
        <div className="flex gap-2">
          <ButtonComponent>Send Message</ButtonComponent>
        </div>
      </div>
    )
  },
  {
    id: 'pricing',
    name: 'Pricing Plan',
    description: 'Subscription pricing page with feature comparison',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-200">
        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Pro Plan</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>
        <ul className="space-y-2 mb-6 text-gray-700">
          <li>✓ Unlimited Projects</li>
          <li>✓ Priority Support</li>
          <li>✓ Advanced Analytics</li>
          <li>✓ Custom Branding</li>
        </ul>
        <div className="flex gap-2">
          <ButtonComponent>Subscribe Now</ButtonComponent>
        </div>
      </div>
    )
  },
  {
    id: 'blog',
    name: 'Blog Post',
    description: 'Article blog with call-to-action buttons',
    preview: (ButtonComponent: React.ComponentType<any>) => (
      <div className="bg-white text-gray-900 p-8 rounded-lg space-y-6 max-w-2xl">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">10 Web Design Tips for 2026</h3>
          <p className="text-gray-600 text-sm">Published on Jan 27, 2026 • 5 min read</p>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Modern web design combines aesthetics with functionality. From dark mode interfaces to interactive components, the trends are evolving...
          </p>
        </div>
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <ButtonComponent>Read More</ButtonComponent>
          <ButtonComponent>Share Article</ButtonComponent>
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
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-2">Button Showcase</h1>
          <p className="text-zinc-400 text-lg">See buttons in real templates. Choose a template and swap button styles to see how different designs fit different use cases.</p>
        </div>

        {/* Template Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Select Template</h2>
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
          <h2 className="text-xl font-bold mb-4">Button Color</h2>
          <label className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg cursor-pointer transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
            <span>Choose Color:</span>
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
          <h2 className="text-xl font-bold mb-4">Live Preview</h2>
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
