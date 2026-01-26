
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GradientShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all">
      Color Shadow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'gradient-shadow',
  name: 'Vivid Shadow',
  category: ButtonCategory.ESSENTIAL,
  component: GradientShadow,
  description: 'Deep colored shadows that pop on hover.',
  code: `<button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all">\n  Color Shadow\n</button>`
};

export default GradientShadow;
