
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RetroBezel: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-700 text-zinc-100 font-bold rounded border-t-4 border-l-4 border-zinc-600 border-b-4 border-r-4 border-zinc-900 active:border-zinc-900 active:border-b-zinc-600 active:border-r-zinc-600 transition-all">
      BEZEL_ON
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-bezel-style',
  name: 'Retro Bezel',
  category: ButtonCategory.RETRO,
  component: RetroBezel,
  description: 'Classic plastic hardware look with contrasting directional borders.',
  code: `<button className="px-8 py-3 bg-zinc-700 text-zinc-100 font-bold border-t-4 border-l-4 border-zinc-600 border-b-4 border-r-4 border-zinc-900 transition-all">\n  BEZEL_ON\n</button>`
};

export default RetroBezel;
