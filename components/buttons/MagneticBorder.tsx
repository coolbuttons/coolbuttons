
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MagneticBorder: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border-2 border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:border-orange-500 hover:scale-105 hover:rotate-1 transition-all shadow-sm">
      Pull Edge
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'magnetic-border',
  name: 'Magnetic Border',
  category: ButtonCategory.MINIMAL,
  component: MagneticBorder,
  description: 'Responsive border and rotation for an organic feel.',
  code: `<button className="px-8 py-3 bg-white border-2 border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:border-orange-500 hover:scale-105 hover:rotate-1 transition-all shadow-sm">\n  Pull Edge\n</button>`
};

export default MagneticBorder;
