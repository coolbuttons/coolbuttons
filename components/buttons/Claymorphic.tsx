import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const Claymorphic: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all">
      Plasticine
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'claymorphic',
  name: 'Plasticine Clay',
  category: ButtonCategory.NEUMORPHIC,
  component: Claymorphic,
  description: 'Vibrant claymorphic design using heavy internal highlights to simulate physical volume and texture.',
  code: `<button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] transition-all">\n  Plasticine\n</button>`
};

export default Claymorphic;