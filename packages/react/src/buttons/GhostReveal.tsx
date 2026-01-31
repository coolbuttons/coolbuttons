import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GhostReveal: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300">
      Ghost Reveal
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ghost-reveal',
  name: 'Subtle Ghost',
  category: ButtonCategory.MINIMAL,
  component: GhostReveal,
  description: 'A barely-visible button that reveals its high-contrast state only when interacted with.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300">
  Ghost Reveal
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const GhostReveal: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300">
      Ghost Reveal
    </button>
  );
};

export default GhostReveal;`,

  // HTML/CSS version
  html: `<button class="ghost-reveal">Ghost Reveal</button>`,

  css: `.ghost-reveal {
  padding: 12px 32px;
  background-color: #ffffff;
  color: #d4d4d8; /* zinc-300 */
  font-weight: 700;
  border: 1px solid #f4f4f5; /* zinc-100 */
  border-radius: 12px;
  cursor: pointer;
  transition: all 300ms ease;
}

.ghost-reveal:hover {
  color: #18181b; /* zinc-900 */
  border-color: #18181b;
}`,

  // Vanilla JavaScript version
  javascript: `const ghostBtn = document.querySelector('.ghost-reveal');

ghostBtn.addEventListener('mouseenter', () => {
  ghostBtn.style.color = '#18181b';
  ghostBtn.style.borderColor = '#18181b';
});

ghostBtn.addEventListener('mouseleave', () => {
  ghostBtn.style.color = '#d4d4d8';
  ghostBtn.style.borderColor = '#f4f4f5';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-white text-zinc-300 border border-zinc-100 font-bold rounded-xl hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300">
  Ghost Reveal
</button>`,
};

export default GhostReveal;