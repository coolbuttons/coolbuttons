import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeumorphicDark: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-br from-[#1a1a1f] to-[#0f0f14] text-gray-500 dark:text-gray-400 font-semibold rounded-2xl shadow-[0_18px_36px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.05)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.9),0_-10px_20px_-10px_rgba(255,255,255,0.08)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.6),inset_0_-8px_16px_-8px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95">
      Dark Plate
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-dark',
  name: 'Dark Plate',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicDark,
  description: 'Refined dark-mode neumorphic design with carefully balanced shadows for minimal dark interfaces.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-[#1a1a1f] to-[#0f0f14] text-gray-500 font-semibold rounded-2xl shadow-[0_18px_36px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.05)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.6),inset_0_-8px_16px_-8px_rgba(255,255,255,0.05)] transition-all">\n  Dark Plate\n</button>`
};

export default NeumorphicDark;