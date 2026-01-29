import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const DotPattern: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">
      Dot Matrix
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dot-pattern',
  name: 'Dot Pattern',
  category: ButtonCategory.RETRO,
  component: DotPattern,
  description: 'Clean technical look featuring a subtle background dot matrix texture.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">
  Dot Matrix
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DotPattern: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">
      Dot Matrix
    </button>
  );
};

export default DotPattern;`,

  // HTML/CSS version
  html: `<button class="dot-pattern">Dot Matrix</button>`,

  css: `.dot-pattern {
  padding: 12px 32px;
  background-color: #ffffff;
  /* Radial gradient simulating the dot pattern */
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 10px 10px;
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border: 2px solid #18181b;
  border-radius: 12px; /* rounded-xl */
  cursor: pointer;
  transition: background-color 150ms;
}

.dot-pattern:hover {
  background-color: #fafafa; /* zinc-50 */
}`,

  // Vanilla JavaScript version
  javascript: `const dotBtn = document.querySelector('.dot-pattern');

dotBtn.addEventListener('mouseenter', () => {
  dotBtn.style.backgroundColor = '#fafafa';
});

dotBtn.addEventListener('mouseleave', () => {
  dotBtn.style.backgroundColor = '#ffffff';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">
  Dot Matrix
</button>`,
};

export default DotPattern;