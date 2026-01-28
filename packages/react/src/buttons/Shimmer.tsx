
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const Shimmer: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
      <span className="relative">Shimmering</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'shimmer-glow',
  name: 'Hot Shimmer',
  category: ButtonCategory.ANIMATED,
  component: Shimmer,
  description: 'Sleek dark button with animated highlight.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl overflow-hidden group">\n  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>\n  <span className="relative">Shimmering</span>\n</button>`
};

export default Shimmer;
