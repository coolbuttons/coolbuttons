
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SoftBloomPill: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-rose-500 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all duration-300">
      Soft Bloom
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'soft-bloom-essential',
  name: 'Soft Bloom',
  category: ButtonCategory.ESSENTIAL,
  component: SoftBloomPill,
  description: 'Vibrant rose pill button with a soft, expansive glow on hover.',
  code: `<button className="px-10 py-3 bg-rose-500 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all">\n  Soft Bloom\n</button>`
};

export default SoftBloomPill;
