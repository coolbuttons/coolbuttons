
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const IndustrialPlate: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-200 text-zinc-600 font-black border-4 border-zinc-400 shadow-[inset_0_2px_4px_white,4px_4px_0_0_#18181b] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase tracking-tighter">
      Lock Plate
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'industrial-plate-heavy',
  name: 'Lock Plate',
  category: ButtonCategory.RETRO,
  component: IndustrialPlate,
  description: 'Heavy metal plate aesthetic with recessed highlights and hard offset shadow.',
  code: `<button className="px-8 py-3 bg-zinc-200 text-zinc-600 font-black border-4 border-zinc-400 shadow-[inset_0_2px_4px_white,4px_4px_0_0_#18181b] active:translate-x-1 transition-all">\n  Lock Plate\n</button>`
};

export default IndustrialPlate;
