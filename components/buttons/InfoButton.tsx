import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const InfoButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Info
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'info-button',
  name: 'Info Button',
  category: ButtonCategory.ESSENTIAL,
  component: InfoButton,
  description: 'A sky blue informational button.',
  code: `<button className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 active:scale-95 transition-all">\n  Info\n</button>`
};

export default InfoButton;
