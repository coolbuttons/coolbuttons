import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const FloatingLabel: React.FC = () => {
  return (
    <div className="relative group inline-block">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-500 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 pointer-events-none">
        CONFIRM?
      </span>
      <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 active:scale-95">
        Action Ready
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'floating-label-btn',
  name: 'Floating Label',
  category: ButtonCategory.MINIMAL,
  component: FloatingLabel,
  description: 'A clean minimal button that reveals a floating confirmation hint positioned above it on hover.',

  // Tailwind CSS version
  tailwind: `<div className="relative group inline-block">
  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-500 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 pointer-events-none">
    CONFIRM?
  </span>
  <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 active:scale-95">
    Action Ready
  </button>
</div>`,

  // React TypeScript version
  react: `import React from 'react';

const FloatingLabel: React.FC = () => {
  return (
    <div className="relative group inline-block">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-500 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 pointer-events-none">
        CONFIRM?
      </span>
      <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 active:scale-95">
        Action Ready
      </button>
    </div>
  );
};

export default FloatingLabel;`,

  // HTML/CSS version
  html: `<div class="floating-label-group">
  <span class="floating-hint">CONFIRM?</span>
  <button class="action-btn">Action Ready</button>
</div>`,

  css: `.floating-label-group {
  position: relative;
  display: inline-block;
}

.floating-label-group .floating-hint {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -24px; /* -top-6 */
  font-size: 10px;
  font-weight: 900;
  color: #f97316; /* orange-500 */
  opacity: 0;
  pointer-events: none;
  transition: all 300ms ease;
  white-space: nowrap;
}

.floating-label-group .action-btn {
  padding: 12px 32px;
  background-color: #ffffff;
  border: 1px solid #e4e4e7; /* zinc-200 */
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border-radius: 12px; /* rounded-xl */
  cursor: pointer;
  transition: all 300ms ease;
}

/* Hover State */
.floating-label-group:hover .floating-hint {
  opacity: 1;
  top: -32px; /* -top-8 */
}

.floating-label-group:hover .action-btn {
  border-color: #f97316;
  color: #f97316;
}

/* Active State */
.floating-label-group .action-btn:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const container = document.querySelector('.floating-label-group');
const label = container.querySelector('.floating-hint');
const btn = container.querySelector('.action-btn');

container.addEventListener('mouseenter', () => {
  // Show Label
  label.style.opacity = '1';
  label.style.top = '-32px';
  
  // Highlight Button
  btn.style.borderColor = '#f97316';
  btn.style.color = '#f97316';
});

container.addEventListener('mouseleave', () => {
  // Hide Label
  label.style.opacity = '0';
  label.style.top = '-24px';
  
  // Reset Button
  btn.style.borderColor = '#e4e4e7';
  btn.style.color = '#18181b';
});

btn.addEventListener('mousedown', () => {
  btn.style.transform = 'scale(0.95)';
});

btn.addEventListener('mouseup', () => {
  btn.style.transform = 'scale(1)';
});`,

  // Default code export (Tailwind)
  code: `<div className="relative group inline-block">
  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-500 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 pointer-events-none">
    CONFIRM?
  </span>
  <button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 active:scale-95">
    Action Ready
  </button>
</div>`,
};

export default FloatingLabel;