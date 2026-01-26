
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassStroke: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white/5 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all">
      Glass Stroke
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glass-stroke-btn',
  name: 'Glass Stroke',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassStroke,
  description: 'Minimalist semi-transparent button with a delicate white border.',
  code: `<button className="px-8 py-3 bg-white/5 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all">\n  Glass Stroke\n</button>`
};

export default GlassStroke;
