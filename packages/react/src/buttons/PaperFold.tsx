
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const PaperFold: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold border-l-4 border-zinc-900 group">
      <span className="relative z-10">Paper Fold</span>
      <div className="absolute top-0 right-0 w-4 h-4 bg-zinc-100 transition-all group-hover:w-full group-hover:h-full group-hover:bg-zinc-900 group-hover:text-white -z-0"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'paper-fold-style',
  name: 'Origami Reveal',
  category: ButtonCategory.EXPERIMENTAL,
  component: PaperFold,
  description: 'Top-right corner "fold" that expands to fill the entire background.',
  code: `<button className="relative px-8 py-3 bg-white text-zinc-900 font-bold border-l-4 border-zinc-900 group">\n  <span className="relative z-10">Paper Fold</span>\n  <div className="absolute top-0 right-0 w-4 h-4 bg-zinc-100 transition-all group-hover:w-full group-hover:h-full group-hover:bg-zinc-900 group-hover:text-white -z-0"></div>\n</button>`
};

export default PaperFold;
