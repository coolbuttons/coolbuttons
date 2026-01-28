
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SoftGlowText: React.FC = () => {
  return (
    <button className="px-8 py-3 text-zinc-400 font-bold hover:text-white hover:drop-shadow-[0_0_8px_white] transition-all duration-300">
      Ethereal Text
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'soft-glow-text',
  name: 'Luminous Text',
  category: ButtonCategory.MINIMAL,
  component: SoftGlowText,
  description: 'Minimal button where the text itself glows softly.',
  code: `<button className="px-8 py-3 text-zinc-400 font-bold hover:text-white hover:drop-shadow-[0_0_8px_white] transition-all">\n  Ethereal Text\n</button>`
};

export default SoftGlowText;
