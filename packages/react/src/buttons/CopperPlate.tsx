import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const CopperPlate: React.FC = () => {
  return (
    <button className="relative px-10 py-3.5 bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-700 text-white font-bold rounded-lg border-3 border-yellow-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-3px_6px_rgba(0,0,0,0.3),0_8px_16px_rgba(101,67,33,0.4)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-3px_6px_rgba(0,0,0,0.4),0_12px_24px_rgba(101,67,33,0.5)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1 overflow-hidden">
      <span className="relative z-10">Copper Plate</span>
      <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'copper-plate',
  name: 'Copper Plate',
  category: ButtonCategory.SKEUOMORPHIC,
  component: CopperPlate,
  description: 'An aged copper button with patina texture and oxidized edges.',
  code: `<button className="px-10 py-3.5 bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-700 text-white font-bold rounded-lg border-3 border-yellow-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-3px_6px_rgba(0,0,0,0.3),0_8px_16px_rgba(101,67,33,0.4)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all">\n  Copper Plate\n</button>`
};

export default CopperPlate;
