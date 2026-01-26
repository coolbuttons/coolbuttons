import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SunriseGradient: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-400/50 active:scale-95 transition-all duration-200">
      Sunrise
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'sunrise-gradient',
  name: 'Sunrise',
  category: ButtonCategory.GRADIENT,
  component: SunriseGradient,
  description: 'A warm sunrise gradient from yellow to red.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-400/50 active:scale-95 transition-all">\n  Sunrise\n</button>`,
  typescript: `import React from 'react';\n\nexport const SunriseGradientButton = () => (\n  <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-400/50 active:scale-95 transition-all">\n    Sunrise\n  </button>\n);`,
  css: `.btn-sunrise {\n  padding: 0.75rem 2rem;\n  background: linear-gradient(to right, #fcd34d, #fb923c, #ef4444);\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-sunrise:hover {\n  box-shadow: 0 10px 15px -3px rgba(251, 146, 60, 0.5);\n}\n\n.btn-sunrise:active {\n  transform: scale(0.95);\n}`
};

export default SunriseGradient;
