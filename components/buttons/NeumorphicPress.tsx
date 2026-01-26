import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeumorphicPress: React.FC = () => {
  return (
    <button className="px-10 py-4 bg-gradient-to-b from-[#e8e8ed] to-[#f5f5f7] text-gray-600 font-semibold rounded-2xl shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.5),inset_0_-4px_8px_0_rgba(0,0,0,0.1)] hover:shadow-[inset_0_6px_12px_0_rgba(255,255,255,0.6),inset_0_-6px_12px_0_rgba(0,0,0,0.15)] transition-all duration-300">
      Neumorphic Press
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neumorphic-press',
  name: 'Neumorphic Press',
  category: ButtonCategory.NEUMORPHIC,
  component: NeumorphicPress,
  description: 'A neumorphic button that looks permanently pressed.',
  code: `<button className="px-10 py-4 bg-gradient-to-b from-[#e8e8ed] to-[#f5f5f7] text-gray-600 font-semibold rounded-2xl shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.5),inset_0_-4px_8px_0_rgba(0,0,0,0.1)] transition-all">\n  Neumorphic Press\n</button>`
};

export default NeumorphicPress;
