
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const DashedReveal: React.FC = () => {
  return (
    <button className="px-8 py-3 border-4 border-dashed border-zinc-200 text-zinc-300 font-black rounded-full hover:border-solid hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300">
      REVEAL_SOLID
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dashed-reveal',
  name: 'Dashed Reveal',
  category: ButtonCategory.EXPERIMENTAL,
  component: DashedReveal,
  description: 'Technical drawing that comes to life on hover.',
  code: `<button className="px-8 py-3 border-4 border-dashed border-zinc-200 text-zinc-300 font-black rounded-full hover:border-solid hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300">\n  REVEAL_SOLID\n</button>`
};

export default DashedReveal;
