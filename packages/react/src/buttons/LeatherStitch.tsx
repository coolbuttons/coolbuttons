import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LeatherStitch: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-amber-50 font-bold rounded-lg border-4 border-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_8px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_8px_rgba(0,0,0,0.6),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-1 overflow-hidden group">
      <span className="relative z-10">Leather Press</span>
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'leather-stitch',
  name: 'Leather Press',
  category: ButtonCategory.SKEUOMORPHIC,
  component: LeatherStitch,
  description: 'A leather-textured button with stitching details and realistic material depth.',
  code: `<button className="px-10 py-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-amber-50 font-bold rounded-lg border-4 border-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_8px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.4)] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.3)] transition-all">\n  Leather Press\n</button>`
};

export default LeatherStitch;
