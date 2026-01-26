
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const OutlineGrow: React.FC = () => {
  return (
    <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
      Fill Rise
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'outline-grow',
  name: 'Outline Fill',
  category: ButtonCategory.MINIMAL,
  component: OutlineGrow,
  description: 'Clean transition from outline to solid.',
  code: `<button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">\n  Fill Rise\n</button>`
};

export default OutlineGrow;
