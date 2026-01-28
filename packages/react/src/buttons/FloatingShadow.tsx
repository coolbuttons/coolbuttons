
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FloatingShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">
      Shadow Flight
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'floating-shadow',
  name: 'Floating Shadow',
  category: ButtonCategory.ESSENTIAL,
  component: FloatingShadow,
  description: 'Dramatic elevation and shadow transformation.',
  code: `<button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">\n  Shadow Flight\n</button>`
};

export default FloatingShadow;
