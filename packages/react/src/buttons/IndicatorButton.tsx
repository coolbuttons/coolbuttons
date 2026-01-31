import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const IndicatorButton: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl group overflow-hidden">
      <span>Indicator</span>
      <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-100 group-hover:bg-orange-500 transition-colors"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'indicator-button-minimal',
  name: 'Small Indicator',
  category: ButtonCategory.MINIMAL,
  component: IndicatorButton,
  description: 'Minimal button with a small corner status dot that changes color.',
  code: `<button className="relative px-8 py-3 bg-white font-bold rounded-xl group">\n  <span>Indicator</span>\n  <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-100 group-hover:bg-orange-500"></div>\n</button>`
};

export default IndicatorButton;