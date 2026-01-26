
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const PrismShine: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-white text-zinc-900 font-black border border-zinc-200 rounded-xl overflow-hidden group">
      <span className="relative z-10">Prism Shine</span>
      <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"></div>
      <div className="absolute top-0 -left-[100%] w-1/3 h-full bg-gradient-to-r from-transparent via-rose-400/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000 delay-100"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'prism-shine-experimental',
  name: 'Prism Shine',
  category: ButtonCategory.EXPERIMENTAL,
  component: PrismShine,
  description: 'Double rainbow-tinted highlights that slide across the button surface.',
  code: `<button className="relative px-10 py-3 bg-white font-black overflow-hidden group">\n  <span className="relative z-10">Prism Shine</span>\n  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-all duration-1000"></div>\n</button>`
};

export default PrismShine;
