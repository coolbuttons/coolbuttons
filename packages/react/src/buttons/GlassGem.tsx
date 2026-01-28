import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassGem: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2),inset_2px_2px_6px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,100,150,0.4)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.25),inset_2px_2px_8px_rgba(255,255,255,0.5),0_12px_25px_rgba(0,100,150,0.5)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,100,150,0.3)] transition-all duration-200 active:translate-y-0.5 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white before:to-transparent before:opacity-30 before:pointer-events-none">
      <span className="relative z-10">Crystal Glass</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glass-gem',
  name: 'Crystal Glass',
  category: ButtonCategory.SKEUOMORPHIC,
  component: GlassGem,
  description: 'A glossy glass button with realistic refraction and light reflection.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2),inset_2px_2px_6px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,100,150,0.4)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,100,150,0.3)] transition-all">\n  Crystal Glass\n</button>`
};

export default GlassGem;
