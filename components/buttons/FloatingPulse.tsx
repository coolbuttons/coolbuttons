
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const FloatingPulse: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-indigo-500 text-white font-black rounded-full hover:scale-105 transition-all">
      <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20"></span>
      <span className="relative">Pulse Up</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'floating-pulse-button',
  name: 'Floating Pulse',
  category: ButtonCategory.ANIMATED,
  component: FloatingPulse,
  description: 'Smooth floating button with a continuous background ping animation.',
  code: `<button className="relative px-10 py-3 bg-indigo-500 text-white font-black rounded-full">\n  <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20"></span>\n  <span className="relative">Pulse Up</span>\n</button>`
};

export default FloatingPulse;
