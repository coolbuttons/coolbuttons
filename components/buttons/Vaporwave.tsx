import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const Vaporwave: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 text-purple-900 font-black rounded-full italic shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200">
      VAPORWAVE
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'vaporwave',
  name: 'Vaporwave',
  category: ButtonCategory.RETRO,
  component: Vaporwave,
  description: 'A pastel vaporwave aesthetic button.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 text-purple-900 font-black rounded-full italic active:scale-95 transition-all">\n  VAPORWAVE\n</button>`
};

export default Vaporwave;
