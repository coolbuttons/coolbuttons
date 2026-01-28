import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SoftNeumorphicIn: React.FC = () => {
  return (
    <button className="relative w-20 h-20 bg-gradient-to-br from-[#f0f0f5] to-[#dcdce5] dark:from-[#1f1f26] dark:to-[#16161e] text-gray-500 dark:text-gray-400 font-bold rounded-full shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_-10px_20px_-10px_rgba(255,255,255,0.55)] dark:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.7),0_-10px_20px_-10px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_12px_24px_-10px_rgba(0,0,0,0.18),inset_0_-12px_24px_-10px_rgba(255,255,255,0.5)] dark:hover:shadow-[inset_0_12px_24px_-10px_rgba(0,0,0,0.55),inset_0_-12px_24px_-10px_rgba(255,255,255,0.08)] transition-all duration-500 active:scale-95 active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.2),inset_0_-8px_16px_-8px_rgba(255,255,255,0.3)]">
      Joystick
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'soft-neumorphic-in',
  name: 'Joystick Head',
  category: ButtonCategory.NEUMORPHIC,
  component: SoftNeumorphicIn,
  description: 'A round tactile button that elegantly transitions from elevated to pressed state with smooth depth changes.',
  code: `<button className="w-20 h-20 bg-gradient-to-br from-[#f0f0f5] to-[#dcdce5] text-gray-500 font-bold rounded-full shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_-10px_20px_-10px_rgba(255,255,255,0.55)] hover:shadow-[inset_0_12px_24px_-10px_rgba(0,0,0,0.18),inset_0_-12px_24px_-10px_rgba(255,255,255,0.5)] transition-all">\n  Joystick\n</button>`
};

export default SoftNeumorphicIn;