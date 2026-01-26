import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RetroJoystick: React.FC = () => {
  return (
    <button className="w-16 h-16 bg-red-600 rounded-full shadow-[0_8px_0_#991b1b,0_15px_20px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-2 transition-all border-4 border-red-500 flex items-center justify-center">
      <div className="w-4 h-4 bg-red-400 rounded-full opacity-50 blur-[2px]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-joystick-btn',
  name: 'Arcade Stick',
  category: ButtonCategory.RETRO,
  component: RetroJoystick,
  description: 'Circular arcade machine button with deep 3D physical travel.',
  code: `<button className="w-16 h-16 bg-red-600 rounded-full shadow-[0_8px_0_#991b1b] active:shadow-none active:translate-y-2 transition-all border-4 border-red-500">\n</button>`
};

export default RetroJoystick;