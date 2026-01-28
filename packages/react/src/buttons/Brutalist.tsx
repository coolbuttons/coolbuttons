
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const Brutalist: React.FC = () => {
  return (
    <button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
      NO RULES
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'brutalist-block',
  name: 'Brutalist Block',
  category: ButtonCategory.RETRO,
  component: Brutalist,
  description: 'High contrast stark black and white design.',
  code: `<button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">\n  NO RULES\n</button>`
};

export default Brutalist;
