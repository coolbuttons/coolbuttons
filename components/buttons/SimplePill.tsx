import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SimplePill: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-[#ff7a00] text-white font-black rounded-full hover:shadow-[0_10px_30px_rgba(255,122,0,0.3)] hover:-translate-y-1 transition-all active:scale-95">
      Classic Pill
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'simple-pill-essential',
  name: 'Classic Pill',
  category: ButtonCategory.ESSENTIAL,
  component: SimplePill,
  description: 'The archetype of the modern rounded action button.',
  code: `<button className="px-10 py-3 bg-[#ff7a00] text-white font-black rounded-full hover:shadow-[0_10px_30px_rgba(255,122,0,0.3)] hover:-translate-y-1 transition-all active:scale-95">\n  Classic Pill\n</button>`
};

export default SimplePill;