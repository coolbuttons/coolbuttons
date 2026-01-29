import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ExpandingPill: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">
      Expand Me
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'expanding-pill',
  name: 'Expanding Pill',
  category: ButtonCategory.ANIMATED,
  component: ExpandingPill,
  description: 'A pill-shaped button that satisfyingly expands its width and adds a focus ring on hover.',

  // Tailwind CSS version
  tailwind: `<button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">
  Expand Me
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const ExpandingPill: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">
      Expand Me
    </button>
  );
};

export default ExpandingPill;`,

  // HTML/CSS version
  html: `<button class="expanding-pill">Expand Me</button>`,

  css: `.expanding-pill {
  padding: 8px 24px; /* px-6 py-2 */
  background-color: #ffffff;
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border: 2px solid #18181b;
  border-radius: 9999px; /* rounded-full */
  cursor: pointer;
  transition: all 300ms ease;
  /* Initialize box-shadow for smooth transition to ring */
  box-shadow: 0 0 0 0 transparent;
}

.expanding-pill:hover {
  padding-left: 40px; /* px-10 */
  padding-right: 40px;
  /* ring-4 ring-zinc-100 */
  box-shadow: 0 0 0 4px #f4f4f5; 
}

.expanding-pill:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const expandBtn = document.querySelector('.expanding-pill');

expandBtn.addEventListener('mouseenter', () => {
  expandBtn.style.paddingLeft = '40px';
  expandBtn.style.paddingRight = '40px';
  expandBtn.style.boxShadow = '0 0 0 4px #f4f4f5';
});

expandBtn.addEventListener('mouseleave', () => {
  expandBtn.style.paddingLeft = '24px';
  expandBtn.style.paddingRight = '24px';
  expandBtn.style.boxShadow = '0 0 0 0 transparent';
});

expandBtn.addEventListener('mousedown', () => {
  expandBtn.style.transform = 'scale(0.95)';
});

expandBtn.addEventListener('mouseup', () => {
  expandBtn.style.transform = 'scale(1)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-6 py-2 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:px-10 hover:ring-4 hover:ring-zinc-100 transition-all duration-300 active:scale-95">
  Expand Me
</button>`,
};

export default ExpandingPill;