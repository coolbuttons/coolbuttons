import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const StoneButton: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-white font-bold rounded-lg border-2 border-gray-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1 overflow-hidden">
      <span className="relative z-10">Stone Button</span>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'stone-button',
  name: 'Stone Button',
  category: ButtonCategory.SKEUOMORPHIC,
  component: StoneButton,
  description: 'A stone-textured button with realistic rock appearance.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-white font-bold rounded-lg border-2 border-gray-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all">\n  Stone Button\n</button>`
};

export default StoneButton;
