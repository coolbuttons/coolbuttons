
import React from 'react';
import { Star } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const BouncyIcon: React.FC = () => {
  return (
    <button className="flex items-center gap-3 px-8 py-3 bg-zinc-900 text-white font-bold rounded-full group">
      <Star className="group-hover:animate-bounce text-orange-400" size={18} />
      <span>Bouncy Star</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'bouncy-icon',
  name: 'Bouncy Icon',
  category: ButtonCategory.ANIMATED,
  component: BouncyIcon,
  description: 'Micro-interaction with a bouncing star icon.',
  code: `<button className="flex items-center gap-3 px-8 py-3 bg-zinc-900 text-white font-bold rounded-full group">\n  <Star className="group-hover:animate-bounce text-orange-400" size={18} />\n  <span>Bouncy Star</span>\n</button>`
};

export default BouncyIcon;
