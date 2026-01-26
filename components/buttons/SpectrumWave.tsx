import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SpectrumWave: React.FC = () => {
  return (
    <button className="relative px-10 py-3.5 bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-[length:200%_auto] text-white font-black rounded-xl hover:bg-[position:right_center] hover:shadow-[0_15px_40px_-5px_rgba(244,63,94,0.4)] transition-all duration-700 uppercase text-[10px] tracking-[0.4em] group">
      <span className="relative z-10">Liquid spectrum</span>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'spectrum-wave-gradient',
  name: 'Liquid Spectrum',
  category: ButtonCategory.GRADIENT,
  component: SpectrumWave,
  description: 'Dynamic tri-tone linear gradient with a satisfying horizontal wave shift.',
  code: `<button className="px-10 py-3.5 bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-[length:200%_auto] text-white font-black rounded-xl hover:bg-[position:right_center] transition-all duration-700 tracking-widest">\n  Liquid spectrum\n</button>`
};

export default SpectrumWave;