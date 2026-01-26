
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MagnifyHover: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:scale-125 hover:shadow-2xl transition-all duration-300 hover:bg-zinc-50">
      Magnify
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'magnify-hover',
  name: 'Micro Zoom',
  category: ButtonCategory.ESSENTIAL,
  component: MagnifyHover,
  description: 'Satisfying extreme scale-up on interaction.',
  code: `<button className="px-8 py-3 bg-white border border-zinc-200 font-bold rounded-xl hover:scale-125 hover:shadow-2xl transition-all">\n  Magnify\n</button>`
};

export default MagnifyHover;
