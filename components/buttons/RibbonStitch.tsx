import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RibbonStitch: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700 text-white font-bold rounded-lg border-4 border-purple-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-3px_6px_rgba(0,0,0,0.3),0_8px_16px_rgba(109,40,217,0.4)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-3px_6px_rgba(0,0,0,0.4),0_12px_24px_rgba(109,40,217,0.5)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1 overflow-hidden group">
      <span className="relative z-10">Ribbon Bow</span>
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(255,255,255,0.1)_3px,rgba(255,255,255,0.1)_6px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ribbon-stitch',
  name: 'Ribbon Bow',
  category: ButtonCategory.SKEUOMORPHIC,
  component: RibbonStitch,
  description: 'A decorative ribbon button with embroidered texture and silk sheen.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700 text-white font-bold rounded-lg border-4 border-purple-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-3px_6px_rgba(0,0,0,0.3),0_8px_16px_rgba(109,40,217,0.4)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all">\n  Ribbon Bow\n</button>`
};

export default RibbonStitch;
