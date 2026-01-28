import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const NeumorphicFlat: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#f0f0f5] dark:bg-[#1a1a22] text-gray-700 dark:text-gray-300 font-semibold rounded-2xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_-4px_8px_-2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_-4px_8px_-2px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_16px_-3px_rgba(0,0,0,0.12),0_-6px_10px_-3px_rgba(255,255,255,0.5)] transition-all duration-200 active:scale-95">
      Neumorphic Flat
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-flat',
  name: 'Neumorphic Flat',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicFlat,
  description: 'A subtle flat neumorphic button with minimal depth.',
  code: `<button className="px-8 py-3 bg-[#f0f0f5] text-gray-700 font-semibold rounded-2xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_-4px_8px_-2px_rgba(255,255,255,0.4)] active:scale-95 transition-all">\n  Neumorphic Flat\n</button>`
};

export default NeumorphicFlat;
