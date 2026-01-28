import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const CeramicTile: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-700 font-bold rounded-md border-2 border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-150 active:translate-y-0.5 overflow-hidden group">
      <span className="relative z-10">Ceramic Tile</span>
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ceramic-tile',
  name: 'Ceramic Tile',
  category: ButtonCategory.SKEUOMORPHIC,
  component: CeramicTile,
  description: 'A sleek ceramic tile button with porcelain gloss and subtle grid pattern.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-700 font-bold rounded-md border-2 border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.15)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all">\n  Ceramic Tile\n</button>`
};

export default CeramicTile;
