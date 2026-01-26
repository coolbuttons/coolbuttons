import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MetallicSheen: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 text-slate-900 font-bold rounded-lg border border-slate-500 shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-200 active:scale-95">
      Metallic Sheen
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'metallic-sheen',
  name: 'Metallic Sheen',
  category: ButtonCategory.EXPERIMENTAL,
  component: MetallicSheen,
  description: 'A metallic button with chrome-like appearance and shine.',
  code: `<button className="px-8 py-3 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 text-slate-900 font-bold rounded-lg border border-slate-500 shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] active:scale-95 transition-all">\n  Metallic Sheen\n</button>`
};

export default MetallicSheen;
