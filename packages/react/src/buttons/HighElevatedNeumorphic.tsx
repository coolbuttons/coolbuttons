import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const HighElevatedNeumorphic: React.FC = () => {
  return (
    <button className="relative px-14 py-6 bg-gradient-to-br from-[#f5f5f9] to-[#e8e8f0] dark:from-[#1f1f27] dark:to-[#14141c] text-gray-600 dark:text-gray-400 font-bold rounded-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12),0_-16px_32px_-16px_rgba(255,255,255,0.6)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75),0_-16px_32px_-16px_rgba(255,255,255,0.08)] hover:scale-105 hover:shadow-[0_50px_100px_-25px_rgba(0,0,0,0.18),0_-20px_40px_-20px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_50px_100px_-25px_rgba(0,0,0,0.85),0_-20px_40px_-20px_rgba(255,255,255,0.1)] active:shadow-[inset_0_12px_24px_-12px_rgba(0,0,0,0.15),inset_0_-12px_24px_-12px_rgba(255,255,255,0.4)] transition-all duration-700 active:scale-95">
      Soft Cloud
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'high-elevated-neumorphic-btn',
  name: 'Soft Cloud',
  category: ButtonCategory.NEUMORPHIC,
  component: HighElevatedNeumorphic,
  description: 'Maximum neumorphic elevation with expansive, layered shadows for an airy, floating aesthetic.',
  code: `<button className="px-14 py-6 bg-gradient-to-br from-[#f5f5f9] to-[#e8e8f0] text-gray-600 font-bold rounded-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12),0_-16px_32px_-16px_rgba(255,255,255,0.6)] transition-all duration-700">\n  Soft Cloud\n</button>`
};

export default HighElevatedNeumorphic;