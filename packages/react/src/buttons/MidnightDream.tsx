import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MidnightDream: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-cyan-300 font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95 transition-all duration-200 border border-cyan-500/30">
      Midnight Dream
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'midnight-dream',
  name: 'Midnight Dream',
  category: ButtonCategory.GRADIENT,
  component: MidnightDream,
  description: 'A dark midnight gradient with cyan glow.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-cyan-300 font-semibold rounded-lg shadow-lg shadow-cyan-500/30 border border-cyan-500/30 active:scale-95 transition-all">\n  Midnight Dream\n</button>`
};

export default MidnightDream;
