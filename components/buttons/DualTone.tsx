import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const DualTone: React.FC = () => {
  return (
    <button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300">
      <div className="bg-white px-6 py-2 rounded-full text-zinc-900 font-bold group-hover:bg-zinc-800 group-hover:text-white transition-all">Dual</div>
      <div className="px-6 py-2 text-zinc-400 font-bold group-hover:text-zinc-500 transition-all">Tone</div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dual-tone',
  name: 'Dual Tone Pill',
  category: ButtonCategory.MINIMAL,
  component: DualTone,
  description: 'Elegant two-color segment layout in a single button with coordinated group hover effects.',

  // Tailwind CSS version
  tailwind: `<button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300">
  <div className="bg-white px-6 py-2 rounded-full text-zinc-900 font-bold group-hover:bg-zinc-800 group-hover:text-white transition-all">Dual</div>
  <div className="px-6 py-2 text-zinc-400 font-bold group-hover:text-zinc-500 transition-all">Tone</div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DualTone: React.FC = () => {
  return (
    <button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300">
      <div className="bg-white px-6 py-2 rounded-full text-zinc-900 font-bold group-hover:bg-zinc-800 group-hover:text-white transition-all">Dual</div>
      <div className="px-6 py-2 text-zinc-400 font-bold group-hover:text-zinc-500 transition-all">Tone</div>
    </button>
  );
};

export default DualTone;`,

  // HTML/CSS version
  html: `<button class="dual-tone">
  <span class="segment-primary">Dual</span>
  <span class="segment-secondary">Tone</span>
</button>`,

  css: `.dual-tone {
  display: flex;
  align-items: center;
  padding: 0 4px; /* px-1 */
  background-color: #f4f4f5; /* zinc-100 */
  border-radius: 9999px; /* full rounded */
  border: none;
  cursor: pointer;
  transition: background-color 300ms;
}

.dual-tone:hover {
  background-color: #18181b; /* zinc-900 */
}

/* Primary Segment (Left) */
.dual-tone .segment-primary {
  background-color: #ffffff;
  padding: 8px 24px;
  border-radius: 9999px;
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  transition: all 150ms;
}

.dual-tone:hover .segment-primary {
  background-color: #27272a; /* zinc-800 */
  color: #ffffff;
}

/* Secondary Segment (Right) */
.dual-tone .segment-secondary {
  padding: 8px 24px;
  color: #a1a1aa; /* zinc-400 */
  font-weight: 700;
  transition: all 150ms;
}

.dual-tone:hover .segment-secondary {
  color: #71717a; /* zinc-500 */
}`,

  // Vanilla JavaScript version
  javascript: `const dualBtn = document.querySelector('.dual-tone');
const segmentPrimary = dualBtn.querySelector('.segment-primary');
const segmentSecondary = dualBtn.querySelector('.segment-secondary');

dualBtn.addEventListener('mouseenter', () => {
  dualBtn.style.backgroundColor = '#18181b';
  
  segmentPrimary.style.backgroundColor = '#27272a';
  segmentPrimary.style.color = '#ffffff';
  
  segmentSecondary.style.color = '#71717a';
});

dualBtn.addEventListener('mouseleave', () => {
  dualBtn.style.backgroundColor = '#f4f4f5';
  
  segmentPrimary.style.backgroundColor = '#ffffff';
  segmentPrimary.style.color = '#18181b';
  
  segmentSecondary.style.color = '#a1a1aa';
});`,

  // Default code export (Tailwind)
  code: `<button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300">
  <div className="bg-white px-6 py-2 rounded-full text-zinc-900 font-bold group-hover:bg-zinc-800 group-hover:text-white transition-all">Dual</div>
  <div className="px-6 py-2 text-zinc-400 font-bold group-hover:text-zinc-500 transition-all">Tone</div>
</button>`,
};

export default DualTone;