import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const OceanGradient: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 active:scale-95 transition-all duration-200">
      Ocean Gradient
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ocean-gradient',
  name: 'Ocean Gradient',
  category: ButtonCategory.GRADIENT,
  component: OceanGradient,
  description: 'A deep ocean-inspired gradient with teal and cyan tones.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 active:scale-95 transition-all">\n  Ocean Gradient\n</button>`,
  typescript: `import React from 'react';\n\nexport const OceanGradientButton = () => (\n  <button className="px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 active:scale-95 transition-all">\n    Ocean Gradient\n  </button>\n);`,
  css: `.btn-ocean-gradient {\n  padding: 0.75rem 2rem;\n  background: linear-gradient(to right, #2dd4bf, #06b6d4, #2563eb);\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-ocean-gradient:hover {\n  box-shadow: 0 10px 15px -3px rgba(45, 212, 191, 0.5);\n}\n\n.btn-ocean-gradient:active {\n  transform: scale(0.95);\n}`
};

export default OceanGradient;
