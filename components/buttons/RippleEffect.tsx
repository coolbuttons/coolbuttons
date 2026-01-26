
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RippleEffect: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl overflow-hidden group">
      <span className="relative z-10">Ripple Click</span>
      <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-150 transition-transform duration-500 rounded-full"></span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ripple-effect',
  name: 'Ripple Effect',
  category: ButtonCategory.ANIMATED,
  component: RippleEffect,
  description: 'Classic material-style ripple response.',
  code: `<button className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl overflow-hidden group">\n  <span className="relative z-10">Ripple Click</span>\n  <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-150 transition-transform duration-500 rounded-full"></span>\n</button>`
};

export default RippleEffect;
