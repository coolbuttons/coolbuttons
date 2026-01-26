import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SuccessButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Confirm
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'success-button',
  name: 'Success Button',
  category: ButtonCategory.ESSENTIAL,
  component: SuccessButton,
  description: 'A green success-state button for confirmations and positive actions.',
  code: `<button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">\n  Confirm\n</button>`,
  typescript: `import React from 'react';\n\nexport const SuccessActionButton = () => (\n  <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">\n    Confirm\n  </button>\n);`,
  css: `.btn-success {\n  padding: 0.75rem 2rem;\n  background-color: #059669;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-success:hover {\n  background-color: #047857;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.btn-success:active {\n  transform: scale(0.95);\n}`
};

export default SuccessButton;
