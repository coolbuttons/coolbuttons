
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalArrow: React.FC = () => {
  return (
    <button className="flex items-center gap-2 text-zinc-900 font-bold group">
      <span className="group-hover:mr-2 transition-all">Explore More</span>
      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-arrow',
  name: 'Minimal Arrow',
  category: ButtonCategory.MINIMAL,
  component: MinimalArrow,
  description: 'Typography focused button with reactive arrow animation.',
  code: `<button className="flex items-center gap-2 font-bold group">\n  <span className="group-hover:mr-2 transition-all">Explore More</span>\n  <ArrowRight className="group-hover:translate-x-1 transition-transform" />\n</button>`
};

export default MinimalArrow;
