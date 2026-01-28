
import React from 'react';
import { Plus } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const MagneticCircle: React.FC = () => {
  return (
    <button className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:scale-125 hover:rotate-90 hover:shadow-[0_0_30px_#ff7a00] transition-all duration-500 shadow-xl active:scale-95">
      <Plus size={24} />
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'magnetic-circle-plus',
  name: 'Magnetic Circle',
  category: ButtonCategory.ANIMATED,
  component: MagneticCircle,
  description: 'Circular icon button with extreme scale and rotation on interaction.',
  code: `<button className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:scale-125 hover:rotate-90 hover:shadow-[0_0_30px_#ff7a00] transition-all">\n  <Plus size={24} />\n</button>`
};

export default MagneticCircle;
