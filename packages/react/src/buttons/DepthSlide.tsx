
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DepthSlide: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg group active:border-b-0 active:translate-y-1 transition-all">
      <span className="relative z-10 group-hover:text-white transition-colors duration-200">Depth Slide</span>
      <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'depth-slide',
  name: 'Depth Slide',
  category: ButtonCategory.RETRO,
  component: DepthSlide,
  description: 'Physical depth combined with a modern sliding reveal.',
  code: `<button className="relative px-8 py-3 bg-zinc-100 border-b-4 border-zinc-300 rounded-lg group active:translate-y-1 transition-all">\n  <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>\n</button>`
};

export default DepthSlide;
