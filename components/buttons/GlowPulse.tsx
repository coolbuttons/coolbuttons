import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlowPulse: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-400/70 active:scale-95 transition-all duration-200 animate-pulse hover:animate-none">
      Glow Pulse
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glow-pulse',
  name: 'Glow Pulse',
  category: ButtonCategory.ANIMATED,
  component: GlowPulse,
  description: 'A button with pulsing glow that stops on hover.',
  code: `<button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/50 hover:shadow-2xl animate-pulse hover:animate-none active:scale-95 transition-all">\n  Glow Pulse\n</button>`
};

export default GlowPulse;
