import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SecondaryButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-sm">
      Secondary Action
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'secondary-button',
  name: 'Secondary Button',
  category: ButtonCategory.ESSENTIAL,
  component: SecondaryButton,
  description: 'A neutral secondary action button for alternative choices.',
  code: `<button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 active:scale-95 transition-all duration-200">\n  Secondary Action\n</button>`,
  typescript: `import React from 'react';\n\nexport const SecondaryActionButton = () => (\n  <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 active:scale-95 transition-all duration-200">\n    Secondary Action\n  </button>\n);`,
  css: `.btn-secondary {\n  padding: 0.75rem 2rem;\n  background-color: #e5e7eb;\n  color: #1f2937;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-secondary:hover {\n  background-color: #d1d5db;\n}\n\n.btn-secondary:active {\n  transform: scale(0.95);\n}`
};

export default SecondaryButton;
