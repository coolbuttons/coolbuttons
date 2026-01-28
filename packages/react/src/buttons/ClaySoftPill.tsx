import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ClaySoftPill: React.FC = () => {
  return (
    <button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] hover:scale-110 active:scale-90 transition-all duration-300">
      Soft Clay
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'clay-soft-pill',
  name: 'Soft Clay',
  category: ButtonCategory.NEUMORPHIC,
  component: ClaySoftPill,
  description: 'A "claymorphic" variation using distinct internal highlights to create an organic, rubbery volume.',
  code: `<button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] transition-all">\n  Soft Clay\n</button>`
};

export default ClaySoftPill;