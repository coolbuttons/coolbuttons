
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const PaperFloat: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border border-zinc-100 text-zinc-800 font-semibold rounded-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      Paper Lift
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'paper-float',
  name: 'Paper Float',
  category: ButtonCategory.MINIMAL,
  component: PaperFloat,
  description: 'Elegant vertical lift with extreme shadow depth.',
  code: `<button className="px-8 py-3 bg-white border border-zinc-100 text-zinc-800 font-semibold rounded-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">\n  Paper Lift\n</button>`
};

export default PaperFloat;
