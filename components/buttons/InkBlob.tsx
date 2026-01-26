import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const InkBlob: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(67,56,202,0.6)] active:scale-90 transition-all duration-300 shadow-lg">
      Ink Blob
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ink-blob',
  name: 'Ink Blob',
  category: ButtonCategory.EXPERIMENTAL,
  component: InkBlob,
  description: 'A rounded button with an ink-like blob shadow effect.',
  code: `<button className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(67,56,202,0.6)] active:scale-90 transition-all">\n  Ink Blob\n</button>`
};

export default InkBlob;
