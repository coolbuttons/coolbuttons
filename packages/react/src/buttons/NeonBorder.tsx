
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeonBorder: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-700 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,122,0,0.5)] transition-all duration-300">
      Neon Border
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neon-border',
  name: 'Neon Border',
  category: ButtonCategory.GRADIENT,
  component: NeonBorder,
  description: 'Sharp dark button with a reactive glowing edge.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-700 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,122,0,0.5)] transition-all duration-300">\n  Neon Border\n</button>`
};

export default NeonBorder;
