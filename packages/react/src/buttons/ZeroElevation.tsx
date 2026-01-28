import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ZeroElevation: React.FC = () => {
  return (
    <button className="px-8 py-3 text-zinc-900 font-black border-4 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 active:scale-95">
      Zero Lift
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'zero-elevation-minimal',
  name: 'Zero Lift',
  category: ButtonCategory.MINIMAL,
  component: ZeroElevation,
  description: 'Button that rests at a negative offset and snaps to zero on hover.',
  code: `<button className="px-8 py-3 text-zinc-900 font-black border-4 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0">\n  Zero Lift\n</button>`
};

export default ZeroElevation;