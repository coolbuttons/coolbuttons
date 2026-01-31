import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const GlassFusion: React.FC = () => {
  return (
    <div className="relative p-10 group inline-block">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 blur-[60px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-500 pointer-events-none"></div>
      
      <button className="relative px-10 py-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 text-emerald-900 dark:text-emerald-100 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
        {/* Specular Highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
        <span className="relative z-10">Aurora Glass</span>
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-fusion',
  name: 'Aurora Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassFusion,
  description: 'Premium frosted glass with a specular gradient highlight and emerald ambient glow.',

  // Tailwind CSS version
  tailwind: `<div className="relative p-10 group inline-block">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 blur-[60px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-500 pointer-events-none"></div>
  <button className="relative px-10 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-emerald-900 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
    <span className="relative z-10">Aurora Glass</span>
  </button>
</div>`,

  // React TypeScript version
  react: `import React from 'react';

const GlassFusion: React.FC = () => {
  return (
    <div className="relative p-10 group inline-block">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 blur-[60px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-500 pointer-events-none"></div>
      
      <button className="relative px-10 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-emerald-900 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
        {/* Specular Highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
        <span className="relative z-10">Aurora Glass</span>
      </button>
    </div>
  );
};

export default GlassFusion;`,

  // HTML/CSS version
  html: `<div class="aurora-container">
  <div class="aurora-glow"></div>
  <button class="aurora-glass">
    <div class="specular-overlay"></div>
    <span class="content">Aurora Glass</span>
  </button>
</div>`,

  css: `.aurora-container {
  position: relative;
  display: inline-block;
  padding: 40px; /* p-10 */
}

.aurora-container .aurora-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 128px; /* w-32 */
  height: 128px;
  background-color: rgba(52, 211, 153, 0.2); /* emerald-400/20 */
  border-radius: 9999px;
  filter: blur(60px);
  pointer-events: none;
  transition: background-color 500ms ease;
  z-index: 0;
}

.aurora-container:hover .aurora-glow {
  background-color: rgba(52, 211, 153, 0.4);
}

.aurora-glass {
  position: relative;
  z-index: 10;
  padding: 16px 40px; /* px-10 py-4 */
  background-color: rgba(255, 255, 255, 0.4); /* white/40 */
  border: 1px solid rgba(255, 255, 255, 0.6); /* white/60 */
  border-radius: 16px; /* rounded-2xl */
  color: #064e3b; /* emerald-900 */
  font-weight: 900; /* font-black */
  overflow: hidden;
  cursor: pointer;
  
  /* Glassmorphism */
  backdrop-filter: blur(24px); /* backdrop-blur-xl */
  -webkit-backdrop-filter: blur(24px);
  
  /* Shadows: Drop + Inset Highlight */
  box-shadow: 
    0 10px 30px -10px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
    
  transition: transform 300ms ease;
}

.aurora-glass .specular-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Gradient top-left white/40 to bottom-right transparent */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent);
  pointer-events: none;
}

.aurora-glass .content {
  position: relative;
  z-index: 20;
}

.aurora-glass:hover {
  transform: scale(1.05);
}

.aurora-glass:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const auroraContainer = document.querySelector('.aurora-container');
const auroraGlow = auroraContainer.querySelector('.aurora-glow');
const auroraBtn = auroraContainer.querySelector('.aurora-glass');

auroraContainer.addEventListener('mouseenter', () => {
  auroraGlow.style.backgroundColor = 'rgba(52, 211, 153, 0.4)';
});

auroraContainer.addEventListener('mouseleave', () => {
  auroraGlow.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
});

auroraBtn.addEventListener('mouseenter', () => {
  auroraBtn.style.transform = 'scale(1.05)';
});

auroraBtn.addEventListener('mouseleave', () => {
  auroraBtn.style.transform = 'scale(1)';
});

auroraBtn.addEventListener('mousedown', () => {
  auroraBtn.style.transform = 'scale(0.95)';
});

auroraBtn.addEventListener('mouseup', () => {
  auroraBtn.style.transform = 'scale(1.05)';
});`,

  // Default code export (Tailwind)
  code: `<button className="relative px-10 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-emerald-900 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
  <span className="relative z-10">Aurora Glass</span>
</button>`,
};

export default GlassFusion;