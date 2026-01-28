
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RoughEdge: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-black [clip-path:polygon(2%_10%,98%_5%,100%_90%,5%_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300">
      Rough Cut
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'rough-edge',
  name: 'Rough Brutalist',
  category: ButtonCategory.RETRO,
  component: RoughEdge,
  description: 'Irregular hand-cut edges that straighten on hover.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-black [clip-path:polygon(2%_10%,98%_5%,100%_90%,5%_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all">\n  Rough Cut\n</button>`
};

export default RoughEdge;
