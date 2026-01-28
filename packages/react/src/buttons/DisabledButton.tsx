import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DisabledButton: React.FC = () => {
  return (
    <button disabled className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">
      Disabled
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'disabled-button',
  name: 'Disabled Button',
  category: ButtonCategory.ESSENTIAL,
  component: DisabledButton,
  description: 'A button in a disabled state for unavailable actions.',
  code: `<button disabled className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">\n  Disabled\n</button>`,
  typescript: `import React from 'react';\n\nexport const DisabledActionButton = () => (\n  <button disabled className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">\n    Disabled\n  </button>\n);`,
  css: `.btn-disabled {\n  padding: 0.75rem 2rem;\n  background-color: #9ca3af;\n  color: #4b5563;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  opacity: 0.6;\n  cursor: not-allowed;\n  transition: all 0.2s ease;\n}\n\n.btn-disabled:hover {\n  cursor: not-allowed;\n  opacity: 0.6;\n}`
};

export default DisabledButton;
