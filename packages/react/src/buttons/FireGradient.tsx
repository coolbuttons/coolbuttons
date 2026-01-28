import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FireGradient: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all duration-200">
      Fire Gradient
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'fire-gradient',
  name: 'Fire Gradient',
  category: ButtonCategory.GRADIENT,
  component: FireGradient,
  description: 'An animated fire-like gradient from orange to pink.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all">\n  Fire Gradient\n</button>`,
  typescript: `import React from 'react';\n\nexport const FireGradientButton = () => (\n  <button className="px-8 py-3 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all">\n    Fire Gradient\n  </button>\n);`,
  css: `.btn-fire-gradient {\n  padding: 0.75rem 2rem;\n  background: linear-gradient(135deg, #fbbf24, #ef4444, #ec4899);\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-fire-gradient:hover {\n  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.5);\n}\n\n.btn-fire-gradient:active {\n  transform: scale(0.95);\n}`
};

export default FireGradient;
