import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const GradientConic: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-950 text-white font-black rounded-xl overflow-hidden group border border-white/10">
      <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Whirlpool</span>
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff7a00,#f43f5e,#8b5cf6,#06b6d4,#ff7a00)] opacity-0 group-hover:opacity-60 group-hover:animate-[spin_2s_linear_infinite] transition-opacity duration-500"></div>
      <div className="absolute inset-[2px] bg-zinc-950 rounded-lg group-hover:opacity-90 transition-opacity"></div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'gradient-conic-btn',
  name: 'Whirlpool Conic',
  category: ButtonCategory.GRADIENT,
  component: GradientConic,
  description: 'Fast-rotating 5-stop conic gradient hidden beneath a thin border mask.',
  code: `<button className="relative px-8 py-3 bg-zinc-950 text-white font-black rounded-xl overflow-hidden group">\n  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff7a00,#f43f5e,#8b5cf6,#06b6d4,#ff7a00)] animate-spin opacity-0 group-hover:opacity-60 transition-opacity"></div>\n  <div className="absolute inset-[2px] bg-zinc-950 rounded-lg"></div>\n</button>`
};

export default GradientConic;