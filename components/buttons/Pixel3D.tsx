
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const Pixel3D: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-emerald-500 text-white font-mono font-bold border-4 border-emerald-700 shadow-[4px_4px_0_0_#064e3b] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
      PIXEL_START
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'pixel-3d',
  name: 'Pixel Retro',
  category: ButtonCategory.RETRO,
  component: Pixel3D,
  description: 'Sharp chunky pixel borders for a lo-fi feel.',
  code: `<button className="px-6 py-2 bg-emerald-500 text-white font-mono font-bold border-4 border-emerald-700 shadow-[4px_4px_0_0_#064e3b] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">\n  PIXEL_START\n</button>`
};

export default Pixel3D;
