import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GradientMorph: React.FC = () => {
  return (
    <button className="relative px-12 py-3.5 bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-400 bg-[length:300%_300%] animate-[gradient_8s_ease_infinite] text-white font-black rounded-full shadow-[0_15px_35px_-10px_rgba(79,70,229,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.5)] hover:-translate-y-1 active:scale-95 transition-all">
      <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Aurorean</span>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'gradient-morph-btn',
  name: 'Aurorean Morph',
  category: ButtonCategory.GRADIENT,
  component: GradientMorph,
  description: 'Smoothly morphing background gradient with ultra-soft indigo shadows.',
  code: `<button className="px-12 py-3.5 bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-400 bg-[length:300%_300%] animate-gradient text-white font-black rounded-full shadow-2xl transition-all">\n  Aurorean\n</button>`
};

export default GradientMorph;