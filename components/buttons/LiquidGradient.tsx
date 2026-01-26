
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const LiquidGradient: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-orange-400 via-rose-400 to-indigo-500 bg-[length:200%_auto] text-white font-bold rounded-2xl hover:bg-[position:right_center] transition-all duration-500 shadow-xl shadow-orange-200">
      Liquid Flow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'liquid-flow',
  name: 'Liquid Flow',
  category: ButtonCategory.ANIMATED,
  component: LiquidGradient,
  description: 'Smooth shifting gradient with heavy shadow.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-orange-400 via-rose-400 to-indigo-500 bg-[length:200%_auto] text-white font-bold rounded-2xl hover:bg-[position:right_center] transition-all duration-500 shadow-xl shadow-orange-200">\n  Liquid Flow\n</button>`
};

export default LiquidGradient;
