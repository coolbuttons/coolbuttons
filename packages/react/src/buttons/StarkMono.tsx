import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const StarkMono: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-zinc-100 text-zinc-900 font-mono font-black border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-150 active:scale-95">
      RUN_STARK
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'stark-mono-btn',
  name: 'Stark Mono',
  category: ButtonCategory.MINIMAL,
  component: StarkMono,
  description: 'Ultra-fast contrast toggle with monospaced typography.',
  code: `<button className="px-6 py-2 bg-zinc-100 text-zinc-900 font-mono font-black border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors active:scale-95">\n  RUN_STARK\n</button>`
};

export default StarkMono;