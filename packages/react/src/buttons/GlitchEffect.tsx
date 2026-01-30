
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const GlitchEffect: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500 hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow">
      GLITCH_ME
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glitch-effect',
  name: 'Glitch Cyber',
  category: ButtonCategory.EXPERIMENTAL,
  component: GlitchEffect,
  description: 'Reactive shadow glitch inspired by sci-fi.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500 hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow">\n  GLITCH_ME\n</button>`
};

export default GlitchEffect;
