import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const OutlineComet: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group overflow-hidden">
      <span className="relative z-10">Comet Tail</span>
      <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full blur-sm -translate-x-full group-hover:animate-[comet_1s_linear_infinite]"></div>
      <style>{`
        @keyframes comet {
          0% { transform: translate(0, 0); opacity: 1; }
          25% { transform: translate(100%, 0); }
          50% { transform: translate(100%, 100%); }
          75% { transform: translate(0, 100%); }
          100% { transform: translate(0, 0); opacity: 1; }
        }
      `}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'outline-comet-animated',
  name: 'Comet Tail',
  category: ButtonCategory.ANIMATED,
  component: OutlineComet,
  description: 'Animated "comet" point that orbits the button perimeter on hover.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 font-bold group overflow-hidden">\n  <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 animate-comet"></div>\n</button>`
};

export default OutlineComet;