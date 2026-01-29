import React, { useState } from 'react';
import { Home, Notebook, Package } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigate?: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-dark/95 backdrop-blur-sm selection:bg-orange-500 selection:text-white">
        {/* Navbar */}
        <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:py-6 max-w-7xl mx-auto">
          <button 
            onClick={() => {
              // Check if we're on a button detail page (contains /buttons/ or /category/)
              const currentPath = window.location.pathname;
              if (currentPath.includes('/buttons/') || currentPath.includes('/category/')) {
                // Go to /all first, then home
                window.location.href = '/buttons/all';
              } else {
                // Otherwise go directly to home
                window.location.href = '/';
              }
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-xl overflow-hidden">
              <img src="/icon.png" alt="Cool Buttons" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg md:text-xl font-black tracking-tighter dark:text-white">
              COOL<span className="text-orange-500">BUTTONS</span>
            </h1>
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              <a href="/guide" className="hover:text-orange-500 cursor-pointer transition-colors">Guide</a>
              <a href="/packages" className="hover:text-orange-500 cursor-pointer transition-colors">Packages</a>
              <a href="/license" className="hover:text-orange-500 cursor-pointer transition-colors">License</a>
              <a href="/showcase" className="hover:text-orange-500 cursor-pointer transition-colors">Showcase</a>
            </div>
            
            {/* Desktop Social Icons */}
            <div className="flex items-center gap-0">
              <a 
                href="https://github.com/coolbuttons/coolbuttons" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://www.npmjs.com/org/coolbuttons" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-all"
                title="NPM"
              >
                <svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                  <g fill-rule="nonzero">
                    <path d="M10.999 500.999v-490h490v490h-490z" fill="#c12127"/>
                    <path d="M102.874 102.874h306.25v306.25h-61.25v-245h-91.875v245H102.874v-306.25z" fill="#fff"/>
                  </g>
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-800/50 rounded-lg transition-all"
              title="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Slides down from top */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50 overflow-y-auto md:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-2">
            {/* Mobile Menu Items */}
            <button
              onClick={() => handleNavigate('/')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavigate('/buttons')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <Package className="w-5 h-5" />
              <span>Buttons</span>
            </button>

            <button
              onClick={() => handleNavigate('/packages')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <Package className="w-5 h-5" />
              <span>Packages</span>
            </button>

            <button
              onClick={() => handleNavigate('/guide')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
              </svg>
              <span>Guide</span>
            </button>

            <button
              onClick={() => handleNavigate('/license')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <Notebook className="w-5 h-5" />
              <span>License</span>
            </button>

            <div className="border-t border-zinc-800 my-2" />

            <button
              onClick={() => handleNavigate('/showcase')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75A2 2 0 0015 7h-2" />
              </svg>
              <span>Showcase</span>
            </button>

            <button
              onClick={() => handleNavigate('/pricing')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pricing</span>
            </button>

            <button
              onClick={() => handleNavigate('/about')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About</span>
            </button>

            <div className="border-t border-zinc-800 my-2" />

            {/* External Links */}
            <a
              href="https://github.com/coolbuttons/coolbuttons"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com/devchauhann3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-900/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.007 3.74 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

 
