import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SoftGradient: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/60 active:scale-95 transition-all duration-200">
      Soft Gradient
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'soft-gradient',
  name: 'Soft Gradient',
  category: ButtonCategory.GRADIENT,
  component: SoftGradient,
  description: 'A soft rose to pink gradient with warm shadows.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-300/50 hover:shadow-xl active:scale-95 transition-all">\n  Soft Gradient\n</button>`
};

export default SoftGradient;
