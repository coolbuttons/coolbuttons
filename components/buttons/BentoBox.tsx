
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../../types';

const BentoBox: React.FC = () => {
  return (
    <button 
      className="flex items-center gap-0 p-2 
                 bg-gradient-to-r from-zinc-100 to-zinc-50 
                 rounded-2xl border border-zinc-200
                 group hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 
                 hover:border-zinc-300 hover:shadow-lg
                 active:scale-95
                 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 
                      group-hover:shadow-lg group-hover:scale-105 group-active:scale-95
                      transition-all duration-200">
        <Zap size={20} className="text-orange-500" strokeWidth={2.5} />
      </div>
      <span className="px-4 py-1 text-sm font-semibold text-zinc-800 tracking-wide">Quick Start</span>
      <div className="pr-2">
        <ChevronRight 
          size={18} 
          className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200"
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'bento-box',
  name: 'Bento Action',
  category: ButtonCategory.MINIMAL,
  component: BentoBox,
  description: 'Segmented modular design with smooth bento-style interaction.',
  
  // Tailwind CSS version
  tailwind: `<button className="flex items-center gap-0 p-2 
             bg-gradient-to-r from-zinc-100 to-zinc-50 
             rounded-2xl border border-zinc-200
             group hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 
             hover:border-zinc-300 hover:shadow-lg
             active:scale-95
             transition-all duration-200
             focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
             disabled:opacity-50 disabled:cursor-not-allowed">
  <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 
                  group-hover:shadow-lg group-hover:scale-105 group-active:scale-95
                  transition-all duration-200">
    <Zap size={20} className="text-orange-500" strokeWidth={2.5} />
  </div>
  <span className="px-4 py-1 text-sm font-semibold text-zinc-800 tracking-wide">Quick Start</span>
  <div className="pr-2">
    <ChevronRight size={18} className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
  </div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const BentoBox: React.FC = () => {
  return (
    <button className="flex items-center gap-0 p-2 
                 bg-gradient-to-r from-zinc-100 to-zinc-50 
                 rounded-2xl border border-zinc-200
                 group hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 
                 hover:border-zinc-300 hover:shadow-lg
                 active:scale-95
                 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed">
      <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 
                      group-hover:shadow-lg group-hover:scale-105 group-active:scale-95
                      transition-all duration-200">
        <Zap size={20} className="text-orange-500" strokeWidth={2.5} />
      </div>
      <span className="px-4 py-1 text-sm font-semibold text-zinc-800 tracking-wide">Quick Start</span>
      <div className="pr-2">
        <ChevronRight size={18} className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
      </div>
    </button>
  );
};

export default BentoBox;`,

  // HTML/CSS version
  html: `<button class="bento-box">
  <div class="bento-icon">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  </div>
  <span class="bento-text">Quick Start</span>
  <div class="bento-chevron">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </div>
</button>`,
  
  css: `.bento-box {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 8px;
  background: linear-gradient(to right, #f4f4f5, #fafafa);
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.bento-box:hover {
  background: linear-gradient(to right, #e4e4e7, #f4f4f5);
  border-color: #d4d4d8;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.bento-box:active {
  transform: scale(0.95);
}

.bento-icon {
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f4f4f5;
  transition: all 200ms ease-out;
}

.bento-box:hover .bento-icon {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.bento-box:active .bento-icon {
  transform: scale(0.95);
}

.bento-icon .icon {
  width: 20px;
  height: 20px;
  color: #ff7a00;
}

.bento-text {
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #27272a;
  letter-spacing: 0.5px;
}

.bento-chevron {
  padding-right: 8px;
  transition: all 200ms ease-out;
}

.bento-box:hover .bento-chevron {
  transform: translateX(4px);
  color: #52525b;
}

.bento-chevron .icon {
  width: 18px;
  height: 18px;
  color: #a1a1aa;
}

.bento-box:focus {
  outline: none;
  box-shadow: 0 0 0 2px #ff7a00;
}

.bento-box:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,

  // Vanilla JavaScript version
  javascript: `const bentoBtn = document.querySelector('.bento-box');
const icon = bentoBtn.querySelector('.bento-icon');
const chevron = bentoBtn.querySelector('.bento-chevron');

bentoBtn.addEventListener('mouseenter', () => {
  bentoBtn.style.background = 'linear-gradient(to right, #e4e4e7, #f4f4f5)';
  bentoBtn.style.borderColor = '#d4d4d8';
  icon.style.transform = 'scale(1.05)';
  chevron.style.transform = 'translateX(4px)';
});

bentoBtn.addEventListener('mouseleave', () => {
  bentoBtn.style.background = 'linear-gradient(to right, #f4f4f5, #fafafa)';
  bentoBtn.style.borderColor = '#e4e4e7';
  icon.style.transform = 'scale(1)';
  chevron.style.transform = 'translateX(0)';
});

bentoBtn.addEventListener('mousedown', () => {
  bentoBtn.style.transform = 'scale(0.95)';
});

bentoBtn.addEventListener('mouseup', () => {
  bentoBtn.style.transform = 'scale(1)';
});`,

  // Default code export (Tailwind)
  code: `<button className="flex items-center gap-0 p-2 
           bg-gradient-to-r from-zinc-100 to-zinc-50 
           rounded-2xl border border-zinc-200
           group hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 
           hover:border-zinc-300 hover:shadow-lg
           active:scale-95
           transition-all duration-200
           focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed">
  <div className="bg-white p-3 rounded-lg shadow-md border border-zinc-100 
                  group-hover:shadow-lg group-hover:scale-105 group-active:scale-95
                  transition-all duration-200">
    <Zap size={20} className="text-orange-500" strokeWidth={2.5} />
  </div>
  <span className="px-4 py-1 text-sm font-semibold text-zinc-800 tracking-wide">Quick Start</span>
  <div className="pr-2">
    <ChevronRight size={18} className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
  </div>
</button>`,
};

export default BentoBox;
