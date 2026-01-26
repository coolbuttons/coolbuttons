import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ShiftShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-200">
      Shift Shadow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'shift-shadow',
  name: 'Shift Shadow',
  category: ButtonCategory.ANIMATED,
  component: ShiftShadow,
  description: 'A button with an offset shadow that shifts on hover.',
  code: `<button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] transition-all">\n  Shift Shadow\n</button>`
};

export default ShiftShadow;
