
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SplitDiagonal: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-lg overflow-hidden group">
      <span className="relative z-10">Diagonal Cut</span>
      <div className="absolute inset-0 bg-orange-500 [clip-path:polygon(0_0,0_0,0_0)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%)] transition-all duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'split-diagonal',
  name: 'Diagonal Reveal',
  category: ButtonCategory.ANIMATED,
  component: SplitDiagonal,
  description: 'Color reveals across a diagonal clip-path line.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-lg overflow-hidden group">\n  <span className="relative z-10">Diagonal Cut</span>\n  <div className="absolute inset-0 bg-orange-500 [clip-path:polygon(0_0,0_0,0_0)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%)] transition-all"></div>\n</button>`
};

export default SplitDiagonal;
