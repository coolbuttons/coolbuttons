
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SkewShift: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold overflow-hidden group border border-zinc-200">
      <span className="relative z-10">Shift Skew</span>
      <div className="absolute top-0 -left-[100%] w-full h-full bg-orange-500 skew-x-[-20deg] group-hover:left-0 transition-all duration-300 -z-0"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'skew-shift',
  name: 'Skew Shift',
  category: ButtonCategory.ANIMATED,
  component: SkewShift,
  description: 'Aggressive skew animation on hover.',
  code: `<button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold overflow-hidden group border border-zinc-200">\n  <span className="relative z-10">Shift Skew</span>\n  <div className="absolute top-0 -left-[100%] w-full h-full bg-orange-500 skew-x-[-20deg] group-hover:left-0 transition-all duration-300 -z-0"></div>\n</button>`
};

export default SkewShift;
