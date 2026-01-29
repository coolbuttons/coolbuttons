import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const NeumorphicEmbossed: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-b from-[#f0f0f5] to-[#dcdce5] dark:from-[#1f1f26] dark:to-[#16161e] text-gray-800 dark:text-gray-200 font-semibold rounded-2xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.12),0_-6px_12px_-6px_rgba(255,255,255,0.6)] dark:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.7),0_-6px_12px_-6px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.16),0_-8px_16px_-8px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.1)] active:shadow-[inset_0_6px_12px_-6px_rgba(0,0,0,0.15),inset_0_-6px_12px_-6px_rgba(255,255,255,0.4)] dark:active:shadow-[inset_0_6px_12px_-6px_rgba(0,0,0,0.5),inset_0_-6px_12px_-6px_rgba(255,255,255,0.08)] transition-all duration-200 active:scale-95">
      Hard Stamp
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-embossed-btn',
  name: 'Hard Stamp',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicEmbossed,
  description: 'A crisp, refined button with tight, precise shadows for a professional stamped aesthetic.',
  code: `<button className="px-8 py-3 bg-gradient-to-b from-[#f0f0f5] to-[#dcdce5] text-gray-800 font-semibold rounded-2xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.12),0_-6px_12px_-6px_rgba(255,255,255,0.6)] active:shadow-[inset_0_6px_12px_-6px_rgba(0,0,0,0.15),inset_0_-6px_12px_-6px_rgba(255,255,255,0.4)] transition-all">\n  Hard Stamp\n</button>`
};

export default NeumorphicEmbossed;