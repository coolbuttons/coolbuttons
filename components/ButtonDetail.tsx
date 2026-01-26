import React, { useState } from 'react';
import { ButtonDesign } from '../types';
import { ArrowLeft, Copy, ClipboardCheck, Code2, Palette } from 'lucide-react';
import Footer from './Footer';

interface ButtonDetailProps {
  design: ButtonDesign;
  onBack: () => void;
}

type CodeTab = 'tailwind' | 'react' | 'css';

const ButtonDetail: React.FC<ButtonDetailProps> = ({ design, onBack }) => {
  const [activeTab, setActiveTab] = useState<CodeTab>('tailwind');
  const [copied, setCopied] = useState(false);

  const getTypeScriptCode = () => {
    if (design.typescript) return design.typescript;
    return `import React from 'react';\n\nconst MyButton = () => (\n  ${design.code.split('\n').join('\n  ')}\n);\n\nexport default MyButton;`;
  };

  const getCSSCode = () => {
    if (design.css) return design.css;
    return `.btn-${design.id} {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  transition: all 0.3s;\n}`;
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'react': return getTypeScriptCode();
      case 'css': return getCSSCode();
      default: return design.code;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
              {design.category}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Button Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{design.name}</h1>
                <p className="text-sm text-zinc-400 leading-relaxed">{design.description}</p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 p-8 flex items-center justify-center min-h-64 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <design.component />
                </div>
              </div>

              {/* Meta Info */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">ID</p>
                  <p className="text-sm font-mono text-white truncate">{design.id}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">Type</p>
                  <p className="text-sm font-mono text-white">{design.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Section */}
          <div className="lg:col-span-2">
            {/* Code Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={20} className="text-orange-400" />
                <h2 className="text-2xl font-bold">Code</h2>
              </div>

              {/* Language Selector */}
              <div className="flex gap-2 flex-wrap">
                {[
                  { id: 'tailwind', label: 'Tailwind' },
                  { id: 'react', label: 'React' },
                  { id: 'css', label: 'CSS' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as CodeTab)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      activeTab === tab.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Editor Container */}
            <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="px-4 sm:px-6 py-4 bg-[#141414] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono ml-2">
                    {design.id}.{activeTab === 'css' ? 'css' : activeTab === 'react' ? 'tsx' : 'jsx'}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    copied
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {copied ? (
                    <>
                      <ClipboardCheck size={16} />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto max-h-[600px] overflow-y-auto scrollbar-hide">
                <pre className="font-mono text-sm text-zinc-300 leading-relaxed">
                  <code>
                    {getActiveCode().split('\n').map((line, i) => (
                      <div key={i} className="group hover:bg-white/5 px-4 -mx-4 transition-colors">
                        <span className="text-zinc-600 select-none w-8 inline-block text-right pr-4">{i + 1}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onBack} />
    </div>
  );
};

export default ButtonDetail;
