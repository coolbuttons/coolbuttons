import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const NeumorphicSoft: React.FC = () => {
  return (
    <button className="relative px-10 py-3.5 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] dark:from-[#1a1a1f] dark:to-[#0f0f14] text-gray-700 dark:text-gray-300 font-semibold rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_-8px_16px_-8px_rgba(255,255,255,0.5)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_-10px_20px_-10px_rgba(255,255,255,0.6)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_-10px_20px_-10px_rgba(255,255,255,0.08)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.2),inset_0_-8px_16px_-8px_rgba(255,255,255,0.4)] dark:active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.6),inset_0_-8px_16px_-8px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95">
      Soft Extrude
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-soft',
  name: 'Soft Extrude',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicSoft,
  description: 'A refined neumorphic button with gradient surface and dual-shadow technique for true 3D depth.',
  code: `<button className="px-10 py-3.5 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] text-gray-700 font-semibold rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_-8px_16px_-8px_rgba(255,255,255,0.5)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.2),inset_0_-8px_16px_-8px_rgba(255,255,255,0.4)] transition-all duration-300">\n  Soft Extrude\n</button>`
};

export default NeumorphicSoft;