
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ShinyGlass: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-zinc-800 font-bold rounded-2xl overflow-hidden group shadow-xl">
      <span className="relative z-10">Shiny Glass</span>
      <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:left-[150%] transition-all duration-700"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'shiny-glass',
  name: 'Shiny Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: ShinyGlass,
  description: 'Reflective surface with a moving highlight.',
  code: `<button className="relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-zinc-800 font-bold rounded-2xl overflow-hidden group shadow-xl">\n  <span className="relative z-10">Shiny Glass</span>\n  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:left-[150%] transition-all duration-700"></div>\n</button>`
};

export default ShinyGlass;
