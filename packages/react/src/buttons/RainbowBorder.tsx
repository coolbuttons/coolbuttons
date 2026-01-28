
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RainbowBorder: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl group overflow-hidden">
      <span className="relative z-10">Rainbow Edge</span>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 p-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-300">
         <div className="bg-white h-full w-full rounded-[calc(0.75rem-1px)]"></div>
      </div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'rainbow-border',
  name: 'Chroma Border',
  category: ButtonCategory.GRADIENT,
  component: RainbowBorder,
  description: 'Clean button with a vibrant multi-color border frame.',
  code: `<button className="relative px-8 py-3 bg-white font-bold rounded-xl group overflow-hidden">\n  <span className="relative z-10">Rainbow Edge</span>\n  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 p-[2px]"></div>\n</button>`
};

export default RainbowBorder;
