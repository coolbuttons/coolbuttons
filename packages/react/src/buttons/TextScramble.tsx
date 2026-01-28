
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const TextScramble: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-mono font-bold tracking-[0.2em] hover:tracking-[0.5em] transition-all duration-300">
      DECRYPT
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'text-scramble',
  name: 'Mono Expansion',
  category: ButtonCategory.MINIMAL,
  component: TextScramble,
  description: 'Cinematic tracking expansion on monospaced text.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-mono font-bold tracking-[0.2em] hover:tracking-[0.5em] transition-all">\n  DECRYPT\n</button>`
};

export default TextScramble;
