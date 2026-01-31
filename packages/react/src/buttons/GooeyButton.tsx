
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GooeyButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full relative group hover:scale-105 active:scale-95 transition-all">
      Gooey Pop
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></span>
      <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-600 rounded-full group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'gooey-button',
  name: 'Organic Blob',
  category: ButtonCategory.EXPERIMENTAL,
  component: GooeyButton,
  description: 'Playful organic shapes reacting to hover.',
  code: `<button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full relative group transition-all">\n  Gooey Pop\n  <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full group-hover:translate-x-4"></span>\n</button>`
};

export default GooeyButton;
