import React from 'react';
    import { ButtonDesign, ButtonCategory } from '../../types';
    
    const NeonPulseRing: React.FC = () => {
      return (
        <button className="relative px-8 py-3 bg-zinc-950 text-emerald-400 font-bold rounded-full group">
          <span className="relative z-10">Pulse Ring</span>
          <div className="absolute inset-0 rounded-full border border-emerald-500 opacity-20 animate-ping group-hover:opacity-50 group-hover:animate-none"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md group-hover:bg-emerald-500/30 transition-all"></div>
        </button>
      );
    };
    
    export const design: ButtonDesign = {
      id: 'neon-pulse-ring-btn',
      name: 'Neon Pulse Ring',
      category: ButtonCategory.GRADIENT,
      component: NeonPulseRing,
      description: 'Pulsating neon emerald button with ambient blurred background.',
      code: `<button className="relative px-8 py-3 bg-zinc-950 text-emerald-400 font-bold rounded-full group">\n  <div className="absolute inset-0 border border-emerald-500 animate-ping"></div>\n</button>`
    };
    
    export default NeonPulseRing;