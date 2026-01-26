import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const InnerShadowDepth: React.FC = () => {
  return (
    <button className="w-36 h-14 bg-[#fdfaf5] dark:bg-[#0a0a0a] text-zinc-500 font-bold rounded-2xl shadow-[inset_8px_8px_16px_#d9d6d1,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#050505,inset_-8px_-8px_16px_#0f0f0f] hover:shadow-[10px_10px_20px_#d9d6d1,-10px_-10px_20px_#ffffff] dark:hover:shadow-[10px_10px_20px_#050505,-10px_-10px_20px_#0f0f0f] hover:-translate-y-1 transition-all duration-500">
      Deep Crater
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'inner-shadow-depth-neumorphic',
  name: 'Deep Crater',
  category: ButtonCategory.NEUMORPHIC,
  component: InnerShadowDepth,
  description: 'An extreme inset well that "pops out" into a floating state on hover.',
  code: `<button className="w-36 h-14 bg-[#fdfaf5] text-zinc-500 font-bold rounded-2xl shadow-[inset_8px_8px_16px_#d9d6d1,inset_-8px_-8px_16px_#ffffff] transition-all">\n  Deep Crater\n</button>`
};

export default InnerShadowDepth;