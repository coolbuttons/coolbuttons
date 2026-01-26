
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RetroComputer: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-[#c0c0c0] text-black font-medium border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] active:border-b-2 active:border-r-2 active:border-t-2 active:border-l-2 active:border-[#808080] active:border-t-black active:border-l-black transition-none">
      OK
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-computer',
  name: 'Win95 Classic',
  category: ButtonCategory.RETRO,
  component: RetroComputer,
  description: 'Authentic Windows 95 UI style button.',
  code: `<button className="px-6 py-2 bg-[#c0c0c0] text-black font-medium border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] active:border-t-black active:border-l-black transition-none">\n  OK\n</button>`
};

export default RetroComputer;
