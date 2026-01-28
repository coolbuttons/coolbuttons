
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SkeuoPlastic: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-200 text-zinc-600 font-bold rounded-xl border border-zinc-300 shadow-[2px_2px_5px_#b8b9be,-3px_-3px_7px_#ffffff] active:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff] transition-all">
      Plastic Click
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'skeuo-plastic',
  name: 'Skeuo Plastic',
  category: ButtonCategory.SKEUOMORPHIC,
  component: SkeuoPlastic,
  description: 'Classic physical interface look with realistic shadow and highlight logic.',
  code: `<button className="px-8 py-3 bg-zinc-200 text-zinc-600 font-bold rounded-xl border border-zinc-300 shadow-[2px_2px_5px_#b8b9be,-3px_-3px_7px_#ffffff] active:shadow-inner transition-all">\n  Plastic Click\n</button>`
};

export default SkeuoPlastic;
