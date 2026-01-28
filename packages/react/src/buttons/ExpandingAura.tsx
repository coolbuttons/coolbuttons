
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ExpandingAura: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
      <span className="relative z-10">Aura Expand</span>
      <div className="absolute inset-0 bg-orange-500 rounded-xl blur-0 group-hover:blur-xl group-hover:scale-125 opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'expanding-aura-animated',
  name: 'Aura Expand',
  category: ButtonCategory.ANIMATED,
  component: ExpandingAura,
  description: 'Dark button with a colored "aura" that expands and blurs behind it on hover.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">\n  <span className="relative z-10">Aura Expand</span>\n  <div className="absolute inset-0 bg-orange-500 rounded-xl blur-0 group-hover:blur-xl group-hover:scale-125 opacity-0 group-hover:opacity-40 transition-all"></div>\n</button>`
};

export default ExpandingAura;
