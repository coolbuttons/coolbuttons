import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlitchVibe: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:blur-sm hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] active:scale-95 transition-all duration-200">
      Glitch Vibe
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glitch-vibe',
  name: 'Glitch Vibe',
  category: ButtonCategory.EXPERIMENTAL,
  component: GlitchVibe,
  description: 'A glitchy button with blur and pink glow effect.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:blur-sm hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] active:scale-95 transition-all">\n  Glitch Vibe\n</button>`
};

export default GlitchVibe;
