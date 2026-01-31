
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const UnderlineSlide: React.FC = () => {
  return (
    <button className="relative px-2 py-1 text-zinc-900 font-bold group">
      <span>Underline Slide</span>
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'underline-slide',
  name: 'Underline Slide',
  category: ButtonCategory.MINIMAL,
  component: UnderlineSlide,
  description: 'Minimal text with a satisfying slide-in indicator.',
  code: `<button className="relative px-2 py-1 text-zinc-900 font-bold group">\n  <span>Underline Slide</span>\n  <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300"></span>\n</button>`
};

export default UnderlineSlide;
