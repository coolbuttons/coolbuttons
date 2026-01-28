import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RetroBeep: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-yellow-300 text-gray-900 font-black rounded-lg border-4 border-gray-800 shadow-[0_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.4)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 transition-all duration-150">
      BEEP
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-beep',
  name: 'Retro Beep',
  category: ButtonCategory.RETRO,
  component: RetroBeep,
  description: 'A classic retro yellow button with beep sound aesthetic.',
  code: `<button className="px-8 py-3 bg-yellow-300 text-gray-900 font-black rounded-lg border-4 border-gray-800 shadow-[0_6px_0_0_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all">\n  BEEP\n</button>`
};

export default RetroBeep;
