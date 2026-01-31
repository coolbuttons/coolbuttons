import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const CyberGradient: React.FC = () => {
  return (
    <button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group">
      <div className="px-8 py-3 bg-zinc-950 rounded-2xl flex items-center justify-center relative z-10">
        <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black uppercase tracking-[0.2em] text-[11px] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
          Mesh Flow
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyber-gradient',
  name: 'Mesh Flow',
  category: ButtonCategory.GRADIENT,
  component: CyberGradient,
  description: 'Multi-stop mesh gradient border with reactive text glow and ambient blur.',

  // Tailwind CSS version
  tailwind: `<button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group">
  <div className="px-8 py-3 bg-zinc-950 rounded-2xl flex items-center justify-center relative z-10">
    <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black uppercase tracking-[0.2em] text-[11px] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
      Mesh Flow
    </span>
  </div>
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const CyberGradient: React.FC = () => {
  return (
    <button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group">
      <div className="px-8 py-3 bg-zinc-950 rounded-2xl flex items-center justify-center relative z-10">
        <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black uppercase tracking-[0.2em] text-[11px] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
          Mesh Flow
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};

export default CyberGradient;`,

  // HTML/CSS version
  html: `<button class="cyber-gradient">
  <div class="inner-content">
    <span class="text-gradient">Mesh Flow</span>
  </div>
  <div class="glow-layer"></div>
</button>`,

  css: `.cyber-gradient {
  position: relative;
  /* Simulating the border via padding + background gradient */
  padding: 1.5px; 
  background: linear-gradient(to top right, #22d3ee, #d946ef, #facc15); /* cyan-400, fuchsia-500, yellow-400 */
  border-radius: 16px; /* rounded-2xl */
  border: none;
  cursor: pointer;
  transition: transform 300ms ease;
}

.cyber-gradient .inner-content {
  position: relative;
  z-index: 10;
  padding: 12px 32px;
  background-color: #09090b; /* zinc-950 */
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cyber-gradient .text-gradient {
  background: linear-gradient(to right, #22d3ee, #d946ef, #facc15);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 11px;
  transition: filter 300ms;
}

.cyber-gradient .glow-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, #22d3ee, #d946ef, #facc15);
  filter: blur(24px); /* blur-xl */
  opacity: 0;
  transition: opacity 300ms;
  z-index: 0;
}

/* Hover Effects */
.cyber-gradient:hover {
  transform: scale(1.05);
}

.cyber-gradient:hover .glow-layer {
  opacity: 0.2;
}

.cyber-gradient:hover .text-gradient {
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.5));
}

/* Active Effects */
.cyber-gradient:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const cyberBtn = document.querySelector('.cyber-gradient');

cyberBtn.addEventListener('mouseenter', () => {
  cyberBtn.style.transform = 'scale(1.05)';
});

cyberBtn.addEventListener('mouseleave', () => {
  cyberBtn.style.transform = 'scale(1)';
});

cyberBtn.addEventListener('mousedown', () => {
  cyberBtn.style.transform = 'scale(0.95)';
});

cyberBtn.addEventListener('mouseup', () => {
  cyberBtn.style.transform = 'scale(1.05)';
});`,

  // Default code export (Tailwind)
  code: `<button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group">
  <div className="px-8 py-3 bg-zinc-950 rounded-2xl flex items-center justify-center relative z-10">
    <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black uppercase tracking-[0.2em] text-[11px] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
      Mesh Flow
    </span>
  </div>
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</button>`,
};

export default CyberGradient;