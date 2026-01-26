
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const LiquidPrism: React.FC = () => {
  return (
    <div className="p-10 flex items-center justify-center">
      <button className="relative px-10 py-4 bg-zinc-900/60 backdrop-blur-3xl border border-white/20 text-white font-black rounded-2xl group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all">
        <span className="relative z-10">Refractive Dark</span>
        {/* Dynamic Light Element */}
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'liquid-prism',
  name: 'Refractive Dark',
  category: ButtonCategory.GLASSMORPHIC,
  component: LiquidPrism,
  description: 'Dark obsidian glass with a spinning internal light refraction.',
  code: `<button className="px-10 py-4 bg-zinc-900/60 backdrop-blur-3xl border border-white/20 text-white font-black rounded-2xl overflow-hidden group">\n  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.2),transparent)] animate-spin"></div>\n</button>`
};

export default LiquidPrism;
