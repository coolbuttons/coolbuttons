
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ExpandingPill: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">
      Expand Me
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'expanding-pill',
  name: 'Expanding Pill',
  category: ButtonCategory.ANIMATED,
  component: ExpandingPill,
  description: 'Satisfying width expansion on interaction.',
  code: `<button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">\n  Expand Me\n</button>`
};

export default ExpandingPill;
