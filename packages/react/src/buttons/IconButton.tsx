import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const IconButton: React.FC = () => {
  return (
    <button className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      <span className="text-xl">+</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'icon-button',
  name: 'Icon Button',
  category: ButtonCategory.ESSENTIAL,
  component: IconButton,
  description: 'A square button designed to hold an icon or symbol.',
  code: `<button className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-all">\n  <span>+</span>\n</button>`,
  typescript: `import React from 'react';\n\nexport const IconActionButton = () => (\n  <button className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-all">\n    <span className="text-xl">+</span>\n  </button>\n);`,
  css: `.btn-icon {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #4f46e5;\n  color: white;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.25rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n\n.btn-icon:hover {\n  background-color: #4338ca;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.btn-icon:active {\n  transform: scale(0.95);\n}`
};

export default IconButton;
