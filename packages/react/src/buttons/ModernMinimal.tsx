
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ModernMinimal: React.FC = () => {
  return (
    <button className="px-8 py-2 border-b-2 border-zinc-200 text-zinc-400 font-medium hover:text-zinc-900 hover:border-zinc-900 transition-all text-sm tracking-tight">
      Slight Underline
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'modern-minimal',
  name: 'Modern Minimal',
  category: ButtonCategory.MINIMAL,
  component: ModernMinimal,
  description: 'Lightweight interface element with a fine-line hover.',
  code: `<button className="px-8 py-2 border-b-2 border-zinc-200 text-zinc-400 font-medium hover:text-zinc-900 hover:border-zinc-900 transition-all text-sm tracking-tight">\n  Slight Underline\n</button>`
};

export default ModernMinimal;
