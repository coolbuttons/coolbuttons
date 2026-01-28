import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FloatingLabel: React.FC = () => {
  return (
    <div className="relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-500 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300">CONFIRM?</span>
      <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all">
        Action Ready
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'floating-label-btn',
  name: 'Floating Label',
  category: ButtonCategory.MINIMAL,
  component: FloatingLabel,
  description: 'Clean button that reveals a floating hint text on hover.',
  code: `<button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 transition-all">\n  Action Ready\n</button>`
};

export default FloatingLabel;