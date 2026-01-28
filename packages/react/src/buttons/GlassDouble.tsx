
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassDouble: React.FC = () => {
  return (
    <div className="relative p-1">
      <div className="absolute inset-0 bg-white/10 blur-md rounded-2xl"></div>
      <button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all active:scale-95">
        Dual Glass
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-double-layered',
  name: 'Dual Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassDouble,
  description: 'Two layers of glass effect: a blurred background halo and a sharp foreground button.',
  code: `<button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all">\n  Dual Glass\n</button>`
};

export default GlassDouble;
