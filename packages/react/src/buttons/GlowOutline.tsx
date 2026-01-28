
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlowOutline: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:bg-indigo-500 hover:text-white transition-all animate-pulse hover:animate-none">
      Glow Aura
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glow-outline',
  name: 'Glow Outline',
  category: ButtonCategory.EXPERIMENTAL,
  component: GlowOutline,
  description: 'A pulsing outline that solidifies and glows.',
  code: `<button className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:bg-indigo-500 hover:text-white transition-all animate-pulse hover:animate-none">\n  Glow Aura\n</button>`
};

export default GlowOutline;
