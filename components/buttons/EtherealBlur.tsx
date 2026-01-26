
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const EtherealBlur: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">
      Ghost Reveal
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ethereal-blur',
  name: 'Dreamy Blur',
  category: ButtonCategory.EXPERIMENTAL,
  component: EtherealBlur,
  description: 'A button that sharpens into focus on hover.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">\n  Ghost Reveal\n</button>`
};

export default EtherealBlur;
