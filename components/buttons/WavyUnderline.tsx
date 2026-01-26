
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const WavyUnderline: React.FC = () => {
  return (
    <button className="relative px-2 py-1 text-zinc-900 font-black group overflow-hidden">
      <span>Wavy Action</span>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'wavy-underline-minimal',
  name: 'Wavy Underline',
  category: ButtonCategory.MINIMAL,
  component: WavyUnderline,
  description: 'Thick text with a hidden underline that slides up from beneath the padding.',
  code: `<button className="relative px-2 py-1 text-zinc-900 font-black group overflow-hidden">\n  <span>Wavy Action</span>\n  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 translate-y-1 group-hover:translate-y-0 transition-transform"></div>\n</button>`
};

export default WavyUnderline;
