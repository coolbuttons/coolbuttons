import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RetroPixel: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-lime-400 text-black font-black rounded-sm border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-x-1 active:translate-y-1 transition-all duration-150">
      PIXEL
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-pixel',
  name: 'Retro Pixel',
  category: ButtonCategory.RETRO,
  component: RetroPixel,
  description: 'A classic retro pixel art style button.',
  code: `<button className="px-8 py-3 bg-lime-400 text-black font-black rounded-sm border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black] transition-all">\n  PIXEL\n</button>`
};

export default RetroPixel;
