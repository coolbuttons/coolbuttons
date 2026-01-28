
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlowGhost: React.FC = () => {
  return (
    <button className="px-6 py-2 text-zinc-400 font-bold hover:text-orange-500 hover:drop-shadow-[0_0_10px_rgba(255,122,0,0.5)] transition-all duration-300 uppercase tracking-widest text-xs">
      Hidden Glow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glow-ghost',
  name: 'Neon Ghost',
  category: ButtonCategory.EXPERIMENTAL,
  component: GlowGhost,
  description: 'Minimalist text with reactive neon glow.',
  code: `<button className="px-6 py-2 text-zinc-400 font-bold hover:text-orange-500 hover:drop-shadow-[0_0_10px_rgba(255,122,0,0.5)] transition-all duration-300 uppercase tracking-widest text-xs">\n  Hidden Glow\n</button>`
};

export default GlowGhost;
