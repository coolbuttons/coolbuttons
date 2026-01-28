
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassFrostedInner: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-2xl relative overflow-hidden group">
      <span className="relative z-10">Glass Core</span>
      <div className="absolute inset-2 bg-white/10 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20 shadow-inner"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glass-frosted-inner',
  name: 'Inner Frost Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassFrostedInner,
  description: 'Dark button that reveals a frosted glass center.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-2xl relative overflow-hidden group">\n  <span className="relative z-10">Glass Core</span>\n  <div className="absolute inset-2 bg-white/10 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>\n</button>`
};

export default GlassFrostedInner;
