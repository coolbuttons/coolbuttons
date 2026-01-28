import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const Classic90s: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-[#dfdfdf] text-black font-medium border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] active:border-t-2 active:border-l-2 active:border-[#808080] active:border-b-2 active:border-r-2 active:border-[#ffffff] shadow-sm">
      Submit Form
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'classic-90s-retro',
  name: '90s Desktop',
  category: ButtonCategory.RETRO,
  component: Classic90s,
  description: 'Authentic gray-scale desktop UI button from the Windows 9x era.',
  code: `<button className="px-6 py-2 bg-[#dfdfdf] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] active:border-t-[#808080] active:border-l-[#808080]">\n  Submit Form\n</button>`
};

export default Classic90s;