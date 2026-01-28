import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ChipBoard: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-b from-lime-300 to-lime-500 text-lime-900 font-black rounded-none border-4 border-lime-900 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.4)] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)] active:translate-x-1 active:translate-y-1 transition-all duration-150">
      CHIP
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'chip-board',
  name: 'Chip Board',
  category: ButtonCategory.RETRO,
  component: ChipBoard,
  description: 'A retro circuit board style button with lime coloring.',
  code: `<button className="px-8 py-3 bg-gradient-to-b from-lime-300 to-lime-500 text-lime-900 font-black rounded-none border-4 border-lime-900 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)] transition-all">\n  CHIP\n</button>`
};

export default ChipBoard;
