
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GhostReveal: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300">
      Ghost Reveal
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ghost-reveal',
  name: 'Subtle Ghost',
  category: ButtonCategory.MINIMAL,
  component: GhostReveal,
  description: 'Extremely light styling that strengthens on focus.',
  code: `<button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all">\n  Ghost Reveal\n</button>`
};

export default GhostReveal;
