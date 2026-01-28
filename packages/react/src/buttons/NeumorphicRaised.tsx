import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const NeumorphicRaised: React.FC = () => {
  return (
    <button className="px-10 py-4 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] text-gray-700 font-semibold rounded-3xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),0_-10px_20px_-5px_rgba(255,255,255,0.7)] hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.15),0_-12px_25px_-8px_rgba(255,255,255,0.8)] active:shadow-[inset_0_8px_16px_-4px_rgba(0,0,0,0.1),inset_0_-8px_16px_-4px_rgba(255,255,255,0.5)] transition-all duration-300 active:scale-95">
      Neumorphic Raised
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-raised',
  name: 'Neumorphic Raised',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicRaised,
  description: 'A highly elevated neumorphic button with strong depth.',
  code: `<button className="px-10 py-4 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] text-gray-700 font-semibold rounded-3xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),0_-10px_20px_-5px_rgba(255,255,255,0.7)] active:shadow-[inset_0_8px_16px_-4px_rgba(0,0,0,0.1)] transition-all">\n  Neumorphic Raised\n</button>`
};

export default NeumorphicRaised;
