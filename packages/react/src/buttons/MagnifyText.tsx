
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MagnifyText: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold hover:text-[1.5rem] transition-all duration-300">
      Text Zoom
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'magnify-text',
  name: 'Typography Zoom',
  category: ButtonCategory.EXPERIMENTAL,
  component: MagnifyText,
  description: 'Button where internal text font-size expands on hover.',
  code: `<button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold hover:text-[1.5rem] transition-all">\n  Text Zoom\n</button>`
};

export default MagnifyText;
