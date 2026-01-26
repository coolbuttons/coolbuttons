import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SilkButton: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 text-white font-bold rounded-lg border border-pink-700 shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] active:translate-y-1 transition-all duration-200">
      <span className="relative z-10">Silk</span>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'silk-button',
  name: 'Silk Button',
  category: ButtonCategory.SKEUOMORPHIC,
  component: SilkButton,
  description: 'A silky soft pink button with fabric texture.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 text-white font-bold rounded-lg border border-pink-700 shadow-[0_8px_16px_rgba(0,0,0,0.2)] active:translate-y-1 transition-all">\n  Silk\n</button>`
};

export default SilkButton;
