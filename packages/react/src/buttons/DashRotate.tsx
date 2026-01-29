import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const DashRotate: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group">
      <span className="relative z-10">Dash Spin</span>
      <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-[spin_4s_linear_infinite] group-hover:border-orange-500 transition-colors"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dash-rotate-animated',
  name: 'Dash Spin',
  category: ButtonCategory.ANIMATED,
  component: DashRotate,
  description: 'A button with a dashed border overlay that rotates slowly and changes color on hover.',

  // Tailwind CSS version
  tailwind: `<button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group">
  <span className="relative z-10">Dash Spin</span>
  <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-[spin_4s_linear_infinite] group-hover:border-orange-500 transition-colors"></div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DashRotate: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group">
      <span className="relative z-10">Dash Spin</span>
      <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-[spin_4s_linear_infinite] group-hover:border-orange-500 transition-colors"></div>
    </button>
  );
};

export default DashRotate;`,

  // HTML/CSS version
  html: `<button class="dash-rotate">
  <span class="label">Dash Spin</span>
  <div class="dash-border"></div>
</button>`,

  css: `.dash-rotate {
  position: relative;
  padding: 12px 32px;
  background-color: #ffffff;
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border-radius: 8px; /* rounded-lg */
  border: none;
  cursor: pointer;
}

.dash-rotate .label {
  position: relative;
  z-index: 10;
}

.dash-rotate .dash-border {
  position: absolute;
  inset: 0;
  border: 2px dashed #e4e4e7; /* zinc-200 */
  border-radius: 8px;
  transition: border-color 150ms;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.dash-rotate:hover .dash-border {
  border-color: #f97316; /* orange-500 */
  animation: spin-slow 4s linear infinite;
}`,

  // Vanilla JavaScript version
  javascript: `const dashBtn = document.querySelector('.dash-rotate');
const dashBorder = dashBtn.querySelector('.dash-border');

dashBtn.addEventListener('mouseenter', () => {
  dashBorder.style.borderColor = '#f97316';
  dashBorder.style.animation = 'spin-slow 4s linear infinite';
});

dashBtn.addEventListener('mouseleave', () => {
  dashBorder.style.borderColor = '#e4e4e7';
  dashBorder.style.animation = 'none';
});`,

  // Default code export (Tailwind)
  code: `<button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group">
  <span className="relative z-10">Dash Spin</span>
  <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-[spin_4s_linear_infinite] group-hover:border-orange-500 transition-colors"></div>
</button>`,
};

export default DashRotate;