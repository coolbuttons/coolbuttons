import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RubberPress: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white font-bold rounded-full border-4 border-red-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.4),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1 overflow-hidden">
      <span className="relative z-10">Big Red</span>
      <div className="absolute inset-0 opacity-20 bg-radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3), transparent 50%)"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'rubber-press',
  name: 'Big Red',
  category: ButtonCategory.SKEUOMORPHIC,
  component: RubberPress,
  description: 'A large rubber emergency button with tactile press sensation.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white font-bold rounded-full border-4 border-red-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.2)] transition-all">\n  Big Red\n</button>`
};

export default RubberPress;
