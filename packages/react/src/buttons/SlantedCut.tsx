
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SlantedCut: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold overflow-hidden group">
      <span className="absolute inset-0 bg-orange-500 -translate-x-full -skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></span>
      <span className="relative">Slanted Cut</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'slanted-cut',
  name: 'Slanted Cut',
  category: ButtonCategory.ANIMATED,
  component: SlantedCut,
  description: 'A sharp geometric hover reveal.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-bold overflow-hidden group">\n  <span className="absolute inset-0 bg-orange-500 -translate-x-full -skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></span>\n  <span className="relative">Slanted Cut</span>\n</button>`
};

export default SlantedCut;
