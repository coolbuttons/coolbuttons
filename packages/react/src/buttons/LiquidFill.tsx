
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LiquidFill: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg overflow-hidden group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">Liquid Fill</span>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-indigo-600 group-hover:h-full transition-all duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'liquid-fill',
  name: 'Liquid Fill',
  category: ButtonCategory.ANIMATED,
  component: LiquidFill,
  description: 'Rising liquid level animation on hover.',
  code: `<button className="relative px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold overflow-hidden group">\n  <span className="relative z-10 group-hover:text-white">Liquid Fill</span>\n  <div className="absolute bottom-0 left-0 w-full h-0 bg-indigo-600 group-hover:h-full transition-all duration-500"></div>\n</button>`
};

export default LiquidFill;
