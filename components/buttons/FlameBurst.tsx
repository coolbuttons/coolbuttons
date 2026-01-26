import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const FlameBurst: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 text-white font-bold rounded-lg shadow-lg shadow-orange-400/50 hover:shadow-xl hover:shadow-red-500/60 active:scale-95 transition-all duration-200 border border-red-600/50">
      Flame Burst
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'flame-burst',
  name: 'Flame Burst',
  category: ButtonCategory.GRADIENT,
  component: FlameBurst,
  description: 'A fiery flame burst gradient button.',
  code: `<button className="px-8 py-3 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 text-white font-bold rounded-lg shadow-lg shadow-orange-400/50 border border-red-600/50 active:scale-95 transition-all">\n  Flame Burst\n</button>`
};

export default FlameBurst;
