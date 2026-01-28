
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const TextStrikethrough: React.FC = () => {
  return (
    <button className="relative px-2 py-1 text-zinc-400 font-bold group">
      <span>Strike Out</span>
      <div className="absolute top-1/2 left-0 w-0 h-[2px] bg-zinc-900 group-hover:w-full transition-all duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'text-strikethrough-btn',
  name: 'Strike Reveal',
  category: ButtonCategory.MINIMAL,
  component: TextStrikethrough,
  description: 'Minimal text that gets a solid horizontal strike line on interaction.',
  code: `<button className="relative px-2 py-1 text-zinc-400 font-bold group">\n  <span>Strike Out</span>\n  <div className="absolute top-1/2 left-0 w-0 h-[2px] bg-zinc-900 group-hover:w-full transition-all"></div>\n</button>`
};

export default TextStrikethrough;
