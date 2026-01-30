import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const ChevronExpand: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
      <span>Continue</span>
      <div className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
        <ChevronRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300" />
      </div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'chevron-expand-animated',
  name: 'Chevron Expand',
  category: ButtonCategory.ANIMATED,
  component: ChevronExpand,
  description: 'Satisfying width-based reveal of an arrow icon on interaction.',

  // Tailwind CSS version
  tailwind: `<button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
  <span>Continue</span>
  <div className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
    <ChevronRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300" />
  </div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';
import { ChevronRight } from 'lucide-react';

const ChevronExpand: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
      <span>Continue</span>
      <div className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
        <ChevronRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300" />
      </div>
    </button>
  );
};

export default ChevronExpand;`,

  // HTML/CSS version
  html: `<button class="chevron-expand">
  <span>Continue</span>
  <div class="icon-wrapper">
    <svg class="icon-chevron" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </div>
</button>`,

  css: `.chevron-expand {
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  padding: 12px 32px;
  background-color: #18181b; /* zinc-900 */
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px; /* rounded-xl */
  border: none;
  cursor: pointer;
}

.chevron-expand .icon-wrapper {
  width: 0;
  overflow: hidden;
  transition: width 300ms;
}

.chevron-expand .icon-chevron {
  transform: translateX(-10px);
  transition: transform 300ms;
}

/* Group Hover Logic */
.chevron-expand:hover .icon-wrapper {
  width: 16px; /* w-4 approx */
}

.chevron-expand:hover .icon-chevron {
  transform: translateX(0);
}`,

  // Vanilla JavaScript version
  javascript: `const chevronBtn = document.querySelector('.chevron-expand');
const iconWrapper = chevronBtn.querySelector('.icon-wrapper');
const icon = chevronBtn.querySelector('.icon-chevron');

chevronBtn.addEventListener('mouseenter', () => {
  iconWrapper.style.width = '16px';
  icon.style.transform = 'translateX(0)';
});

chevronBtn.addEventListener('mouseleave', () => {
  iconWrapper.style.width = '0';
  icon.style.transform = 'translateX(-10px)';
});`,

  // Default code export (Tailwind)
  code: `<button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
  <span>Continue</span>
  <div className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
    <ChevronRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300" />
  </div>
</button>`,
};

export default ChevronExpand;