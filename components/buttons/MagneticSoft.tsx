
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MagneticSoft: React.FC = () => {
  return (
    <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#ff7a00] transition-all duration-200 active:translate-x-0 active:translate-y-0 active:shadow-none">
      Magnetic Move
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'magnetic-soft',
  name: 'Magnetic Soft',
  category: ButtonCategory.MINIMAL,
  component: MagneticSoft,
  description: 'Offset shadow that creates a 3D magnetic effect on hover.',
  code: `<button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#ff7a00] transition-all duration-200 active:translate-x-0 active:translate-y-0 active:shadow-none">\n  Magnetic Move\n</button>`
};

export default MagneticSoft;
