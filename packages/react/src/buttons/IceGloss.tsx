import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const IceGloss: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-br from-cyan-200 via-cyan-300 to-blue-400 text-blue-900 font-bold rounded-2xl shadow-lg shadow-cyan-300/50 hover:shadow-xl hover:shadow-cyan-400/60 active:scale-95 transition-all duration-200 border border-cyan-400/50">
      Ice Gloss
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ice-gloss',
  name: 'Ice Gloss',
  category: ButtonCategory.GRADIENT,
  component: IceGloss,
  description: 'A frosty ice gradient button with glossy appearance.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-cyan-200 via-cyan-300 to-blue-400 text-blue-900 font-bold rounded-2xl shadow-lg shadow-cyan-300/50 border border-cyan-400/50 active:scale-95 transition-all">\n  Ice Gloss\n</button>`
};

export default IceGloss;
