import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MetalBrush: React.FC = () => {
  return (
    <button className="relative px-10 py-3.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 text-gray-800 font-bold rounded-md border-2 border-gray-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.3),0_6px_12px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.4)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-150 active:translate-y-0.5 overflow-hidden group">
      <span className="relative z-10">Brushed Metal</span>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'metal-brush',
  name: 'Brushed Metal',
  category: ButtonCategory.SKEUOMORPHIC,
  component: MetalBrush,
  description: 'A metallic button with brushed texture and industrial finish.',
  code: `<button className="px-10 py-3.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 text-gray-800 font-bold rounded-md border-2 border-gray-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.3),0_6px_12px_rgba(0,0,0,0.3)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all">\n  Brushed Metal\n</button>`
};

export default MetalBrush;
