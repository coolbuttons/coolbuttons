import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-sm relative">
      {/* Logo on border */}
      <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <img src="/icon.png" alt="Cool Buttons Logo" className="h-16 w-16 sm:h-20 sm:w-20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">Cool Buttons</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              400+ beautifully designed button components. Copy, paste, and customize with ease.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/buttons/essential"
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Essential
                </a>
              </li>
              <li>
                <a
                  href="/buttons/gradient"
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Gradient
                </a>
              </li>
              <li>
                <a
                  href="/buttons/animated"
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Animated
                </a>
              </li>
              <li>
                <a
                  href="/buttons/glassmorphic"
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Glassmorphic
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/guide" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  Guide
                </a>
              </li>
              <li>
                <a href="/packages" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  Packages & Usage
                </a>
              </li>
              <li>
                <a href="/showcase" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Features</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                React Ready
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Copy & Paste
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Dark Mode
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">
              © 2026 Cool Buttons. All rights reserved. 
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
              <a href="/about" className="text-zinc-400 hover:text-orange-400 transition-colors">
                About
              </a>
              <a href="/contact" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Contact
              </a>
              <a href="https://github.com/devchauhann" className="text-zinc-400 hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/privacy" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap.xml" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
