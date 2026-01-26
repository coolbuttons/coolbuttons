
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SkewedOutline: React.FC = () => {
  return (
    <button className="px-10 py-3 border-2 border-indigo-600 text-indigo-600 font-bold -skew-x-12 hover:skew-x-0 hover:bg-indigo-600 hover:text-white transition-all duration-300">
      Skew Toggle
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'skewed-outline-btn',
  name: 'Skew Toggle',
  category: ButtonCategory.EXPERIMENTAL,
  component: SkewedOutline,
  description: 'Aggressively skewed outline that straightens and fills on hover.',
  code: `<button className="px-10 py-3 border-2 border-indigo-600 text-indigo-600 font-bold -skew-x-12 hover:skew-x-0 hover:bg-indigo-600 hover:text-white transition-all">\n  Skew Toggle\n</button>`
};

export default SkewedOutline;
