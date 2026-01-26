import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeumorphicConcave: React.FC = () => {
  return (
    <button className="relative w-32 h-14 bg-gradient-to-b from-[#f0f0f5] to-[#e0e0e8] dark:from-[#1f1f26] dark:to-[#16161e] text-orange-500 font-bold rounded-3xl shadow-[inset_0_12px_24px_-8px_rgba(0,0,0,0.15),inset_0_-12px_24px_-8px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_12px_24px_-8px_rgba(0,0,0,0.5),inset_0_-12px_24px_-8px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_16px_32px_-10px_rgba(0,0,0,0.2),inset_0_-16px_32px_-10px_rgba(255,255,255,0.6)] dark:hover:shadow-[inset_0_16px_32px_-10px_rgba(0,0,0,0.6),inset_0_-16px_32px_-10px_rgba(255,255,255,0.1)] active:shadow-[inset_0_8px_16px_-6px_rgba(0,0,0,0.2),inset_0_-8px_16px_-6px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95">
      Soft Inset
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-concave',
  name: 'Soft Inset',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicConcave,
  description: 'A concave neumorphic design with accurate depth shadows creating a recessed, pressable interface element.',
  code: `<button className="w-32 h-14 bg-gradient-to-b from-[#f0f0f5] to-[#e0e0e8] text-orange-500 font-bold rounded-3xl shadow-[inset_0_12px_24px_-8px_rgba(0,0,0,0.15),inset_0_-12px_24px_-8px_rgba(255,255,255,0.5)] transition-all">\n  Soft Inset\n</button>`
};

export default NeumorphicConcave;