import React from 'react';
import { 
  Package, ExternalLink
} from 'lucide-react';
import Footer from './Footer';

const Packages: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-6 md:w-8 h-6 md:h-8 text-orange-500" />
            <h1 className="text-2xl md:text-5xl font-black tracking-tight">
              NPM <span className="text-orange-500">Packages</span>
            </h1>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            Production-ready button components for React and Vanilla JavaScript. Install, import, and ship.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* React Package */}
          <div className="relative h-full bg-zinc-900/50 border border-zinc-800 rounded-lg md:rounded-xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
            {/* Icon and Title */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="mb-4 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="3.5"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-black mb-2">@coolbuttons/react</h2>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded text-xs font-mono">
                npm <span className="bg-orange-600 text-white px-2 rounded ml-1">v0.563.0</span>
              </div>
              <div className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded text-xs font-mono">
                downloads <span className="bg-green-600 text-white px-2 rounded ml-1">23M/week</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-300 mb-6 leading-relaxed">
              A Lucide icon library package for React applications.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href="https://www.npmjs.com/package/@coolbuttons/react"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center py-2 md:py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all text-xs md:text-sm"
              >
                Guide
              </a>
              <a
                href="https://github.com/devchauhann/coolbuttons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center py-2 md:py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-full transition-all text-xs md:text-sm"
              >
                Source
              </a>
            </div>
          </div>

          {/* Vanilla Package */}
          <div className="relative h-full bg-zinc-900/50 border border-zinc-800 rounded-lg md:rounded-xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
            {/* Icon and Title */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="mb-4 w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16" fontWeight="bold" fill="currentColor">JS</text>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-black mb-2">@coolbuttons/vanilla</h2>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded text-xs font-mono">
                npm <span className="bg-orange-600 text-white px-2 rounded ml-1">v1.0.0</span>
              </div>
              <div className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded text-xs font-mono">
                downloads <span className="bg-green-600 text-white px-2 rounded ml-1">5k+/week</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-300 mb-6 leading-relaxed">
              Zero-dependency button styles for vanilla JavaScript applications.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href="https://www.npmjs.com/package/@coolbuttons/vanilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center py-2 md:py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all text-xs md:text-sm"
              >
                Guide
              </a>
              <a
                href="https://github.com/devchauhann/coolbuttons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center py-2 md:py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-full transition-all text-xs md:text-sm"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </section>



      <Footer onNavigate={() => {}} />
    </div>
  );
};

export default Packages;
