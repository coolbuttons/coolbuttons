import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DangerButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Delete
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'danger-button',
  name: 'Danger Button',
  category: ButtonCategory.ESSENTIAL,
  component: DangerButton,
  description: 'A red danger-state button for destructive actions.',
  code: `<button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-200">\n  Delete\n</button>`,
  typescript: `import React from 'react';\n\nexport const DangerActionButton = () => (\n  <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-200">\n    Delete\n  </button>\n);`,
  css: `.btn-danger {\n  padding: 0.75rem 2rem;\n  background-color: #dc2626;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-danger:hover {\n  background-color: #b91c1c;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.btn-danger:active {\n  transform: scale(0.95);\n}`
};

export default DangerButton;
