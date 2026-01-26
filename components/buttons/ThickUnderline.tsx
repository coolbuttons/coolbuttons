import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ThickUnderline: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-black rounded group">
      <span className="relative z-10">Thick Line</span>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-zinc-300 group-hover:h-full group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'thick-underline-retro',
  name: 'Stark Underline',
  category: ButtonCategory.RETRO,
  component: ThickUnderline,
  description: 'Chunky industrial underline that engulfs the button as background.',
  code: `<button className="relative px-8 py-3 font-black group">\n  <div className="absolute bottom-0 left-0 w-full h-2 bg-zinc-300 group-hover:h-full transition-all"></div>\n</button>`
};

export default ThickUnderline;