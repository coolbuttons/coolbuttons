import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const WoodGrain: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-yellow-700 via-amber-700 to-amber-900 text-amber-50 font-bold rounded-lg border-4 border-amber-950 shadow-[inset_0_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.5),0_12px_24px_rgba(0,0,0,0.6)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-1 overflow-hidden group">
      <span className="relative z-10">Wood Grain</span>
      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(139,69,19,0.15)_3px,rgba(139,69,19,0.15)_6px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'wood-grain',
  name: 'Wood Grain',
  category: ButtonCategory.SKEUOMORPHIC,
  component: WoodGrain,
  description: 'A wooden button with realistic grain texture and natural varnish finish.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-yellow-700 via-amber-700 to-amber-900 text-amber-50 font-bold rounded-lg border-4 border-amber-950 shadow-[inset_0_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.5)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.3)] transition-all">\n  Wood Grain\n</button>`
};

export default WoodGrain;
