import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const VelvetButton: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-violet-600 via-violet-700 to-violet-900 text-white font-bold rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.6)] active:translate-y-1 transition-all duration-200 overflow-hidden">
      <span className="relative z-10">Velvet</span>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'velvet-button',
  name: 'Velvet Button',
  category: ButtonCategory.SKEUOMORPHIC,
  component: VelvetButton,
  description: 'A luxurious velvet-textured button in deep violet.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-violet-600 via-violet-700 to-violet-900 text-white font-bold rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3)] active:translate-y-1 transition-all">\n  Velvet\n</button>`
};

export default VelvetButton;
