import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeumorphicConcavePill: React.FC = () => {
  return (
    <button className="relative px-12 py-3.5 bg-gradient-to-b from-[#ececf1] to-[#dcdce5] dark:from-[#1a1a22] dark:to-[#12121a] text-gray-600 dark:text-gray-400 font-semibold rounded-full shadow-[inset_0_16px_32px_-12px_rgba(0,0,0,0.18),inset_0_-16px_32px_-12px_rgba(255,255,255,0.55)] dark:shadow-[inset_0_16px_32px_-12px_rgba(0,0,0,0.55),inset_0_-16px_32px_-12px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_20px_40px_-14px_rgba(0,0,0,0.22),inset_0_-20px_40px_-14px_rgba(255,255,255,0.65)] dark:hover:shadow-[inset_0_20px_40px_-14px_rgba(0,0,0,0.65),inset_0_-20px_40px_-14px_rgba(255,255,255,0.1)] active:shadow-[inset_0_10px_20px_-8px_rgba(0,0,0,0.15),inset_0_-10px_20px_-8px_rgba(255,255,255,0.4)] transition-all duration-500 active:scale-95 hover:text-gray-900 dark:hover:text-gray-100">
      Pill Well
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-concave-pill-btn',
  name: 'Pill Well',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicConcavePill,
  description: 'An elongated, deeply recessed pill design that feels like a physical slot or cavity.',
  code: `<button className="px-12 py-3.5 bg-gradient-to-b from-[#ececf1] to-[#dcdce5] text-gray-600 font-semibold rounded-full shadow-[inset_0_16px_32px_-12px_rgba(0,0,0,0.18),inset_0_-16px_32px_-12px_rgba(255,255,255,0.55)] transition-all">\n  Pill Well\n</button>`
};

export default NeumorphicConcavePill;