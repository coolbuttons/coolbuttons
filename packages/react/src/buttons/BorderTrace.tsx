
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const BorderTrace: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold group">
      <span className="relative z-10">Border Trace</span>
      <span className="absolute inset-0 border-2 border-zinc-100 group-hover:border-orange-500 transition-colors duration-300"></span>
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      <span className="absolute top-0 right-0 w-0.5 h-0 bg-orange-500 group-hover:h-full transition-all duration-300"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-orange-500 group-hover:h-full transition-all duration-300"></span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'border-trace',
  name: 'Border Trace',
  category: ButtonCategory.ANIMATED,
  component: BorderTrace,
  description: 'Animate border drawing around the button on hover.',
  code: `<button className="relative px-8 py-3 bg-white text-zinc-900 font-bold group">\n  <span className="relative z-10">Border Trace</span>\n  <span className="absolute inset-0 border-2 border-zinc-100 group-hover:border-orange-500 transition-colors duration-300"></span>\n  <span className="absolute top-0 left-0 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>\n</button>`
};

export default BorderTrace;
