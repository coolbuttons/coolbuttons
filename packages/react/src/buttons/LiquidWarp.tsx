
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LiquidWarp: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:rounded-[50%_20%_50%_20%/20%_50%_20%_50%] transition-all duration-700 active:scale-95">
      Liquid Warp
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'liquid-warp-btn',
  name: 'Liquid Warp',
  category: ButtonCategory.ANIMATED,
  component: LiquidWarp,
  description: 'Button that morphs into a blob-like shape with smooth border-radius transitions.',
  code: `<button className="px-10 py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:rounded-[50%_20%_50%_20%/20%_50%_20%_50%] transition-all duration-700">\n  Liquid Warp\n</button>`
};

export default LiquidWarp;
