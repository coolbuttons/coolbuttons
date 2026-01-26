
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const BorderBeam: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-950 text-white font-bold rounded-xl overflow-hidden group">
      <span className="relative z-10">Neon Beam</span>
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,transparent,#ff7a00,transparent)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite]"></div>
      <div className="absolute inset-[2px] bg-zinc-950 rounded-xl"></div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'border-beam',
  name: 'Neon Border Beam',
  category: ButtonCategory.GRADIENT,
  component: BorderBeam,
  description: 'A rotating light beam around the border.',
  code: `<button className="relative px-8 py-3 bg-zinc-950 text-white font-bold rounded-xl overflow-hidden group">\n  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,#ff7a00)] animate-spin"></div>\n</button>`
};

export default BorderBeam;
