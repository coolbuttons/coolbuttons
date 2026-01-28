import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const OffButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Off
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'off-button',
  name: 'Off Button',
  category: ButtonCategory.ESSENTIAL,
  component: OffButton,
  description: 'A slate-colored off/neutral state button.',
  code: `<button className="px-8 py-3 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 active:scale-95 transition-all">\n  Off\n</button>`
};

export default OffButton;
