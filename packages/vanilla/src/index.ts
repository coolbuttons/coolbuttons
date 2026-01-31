export interface ButtonOptions {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  title?: string;
  [key: string]: any;
}

export class CoolButton {
  private element: HTMLButtonElement;

  constructor(options: ButtonOptions = {}) {
    this.element = document.createElement('button');
    this.configure(options);
  }

  private configure(options: ButtonOptions): void {
    if (options.text) {
      this.element.textContent = options.text;
    }
    if (options.className) {
      this.element.className = options.className;
    }
    if (options.id) {
      this.element.id = options.id;
    }
    if (options.title) {
      this.element.title = options.title;
    }
    if (options.disabled) {
      this.element.disabled = true;
    }
    if (options.onClick) {
      this.element.addEventListener('click', options.onClick);
    }
  }

  getElement(): HTMLButtonElement {
    return this.element;
  }

  setText(text: string): void {
    this.element.textContent = text;
  }

  setDisabled(disabled: boolean): void {
    this.element.disabled = disabled;
  }

  addClassName(className: string): void {
    this.element.classList.add(className);
  }

  removeClassName(className: string): void {
    this.element.classList.remove(className);
  }

  onClick(callback: () => void): void {
    this.element.addEventListener('click', callback);
  }

  mount(container: string | HTMLElement): void {
    const target =
      typeof container === 'string'
        ? document.querySelector(container)
        : container;
    if (target) {
      target.appendChild(this.element);
    }
  }
}

// Button style templates - Tailwind CSS classes for preset designs
export const ButtonStyles = {
  // === ORIGINAL STYLES ===
  claymorphic: `px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-200`,
  glasscard: `px-10 py-5 bg-white/20 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 font-black hover:bg-white/30 transition-all duration-300 active:scale-95`,
  neumorphic: `px-10 py-3.5 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] text-gray-700 font-semibold rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_-8px_16px_-8px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_-10px_20px_-10px_rgba(255,255,255,0.6)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.2),inset_0_-8px_16px_-8px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95`,
  brutalist: `px-6 py-3 bg-black text-white font-black uppercase tracking-widest text-[10px] border-2 border-black hover:bg-white hover:text-black active:scale-95 transition-all`,
  neonborder: `px-6 py-3 bg-black text-orange-500 font-black uppercase tracking-widest text-[10px] border-2 border-orange-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 transition-all`,
  meshflow: `relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300`,
  modernminimal: `px-6 py-3 bg-white text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-300 rounded-lg hover:bg-zinc-100 active:scale-95 transition-all`,
  bigged: `px-10 py-4 bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white font-bold rounded-full border-4 border-red-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.4),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1`,
  glitch: `px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500 hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow duration-300`,
  shimmer: `relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300`,
  liquidfill: `relative px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg overflow-hidden group hover:text-white transition-colors duration-300`,
  holographic: `px-8 py-3 text-white font-black rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/50 transition-all duration-300`,
  doubleshadow: `px-8 py-3 bg-white text-black font-bold rounded-lg shadow-[0_10px_0_-5px_rgba(0,0,0,0.3),0_20px_0_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_0_-5px_rgba(0,0,0,0.3),0_25px_0_-10px_rgba(0,0,0,0.2)] active:translate-y-1 transition-all duration-200`,
  splitcolor: `px-8 py-3 text-white font-bold rounded-lg overflow-hidden relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 active:scale-95 transition-all duration-300`,

  // === NEW STYLES ===
  dualtone: `flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300`,
  depthslide: `relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg overflow-hidden group active:border-b-0 active:translate-y-1 transition-all`,
  dotpattern: `px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors`,
  stackedlayers: `relative px-8 py-3 bg-rose-500 text-white font-bold rounded-xl before:absolute before:inset-0 before:bg-rose-200 before:rounded-xl before:-z-10 before:translate-x-0 before:translate-y-0 hover:before:-translate-x-2 hover:before:-translate-y-2 before:transition-transform`,
  rainbowborder: `relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl group overflow-hidden`,
  glitcheffect: `px-8 py-3 bg-zinc-900 text-white font-black italic rounded-none border-r-4 border-orange-500 hover:animate-pulse hover:shadow-[4px_0_0_#0ea5e9,-4px_0_0_#f43f5e] transition-shadow`,
  glassrefraction: `px-10 py-4 bg-white/30 dark:bg-white/5 backdrop-blur-3xl border border-white/80 dark:border-white/20 text-cyan-950 dark:text-cyan-100 font-black rounded-[2rem] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.6)] hover:bg-white/40 hover:translate-y-[-2px] transition-all`,
  gradientconic: `relative px-8 py-3 bg-zinc-950 text-white font-black rounded-xl overflow-hidden group border border-white/10`,
  magnifyhover: `px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:scale-125 hover:shadow-2xl transition-all duration-300 hover:bg-zinc-50`,
  gooeybutton: `px-8 py-3 bg-orange-500 text-white font-bold rounded-full relative group hover:scale-105 active:scale-95 transition-all`,
  rubberpress: `relative px-10 py-4 bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white font-bold rounded-full border-4 border-red-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.4),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 active:translate-y-1 overflow-hidden`,
  retro3d: `px-8 py-3 bg-orange-500 text-white font-extrabold rounded-xl border-b-[6px] border-orange-700 active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-tight`,
  glassinset: `px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/50 dark:border-white/10 text-orange-950 dark:text-orange-100 font-black rounded-xl shadow-[inset_0_2px_15px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.05)] hover:bg-white/20 transition-all group overflow-hidden`,
  glassdouble: `relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all duration-300 active:scale-95`,
  glassfusion: `relative px-10 py-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 text-emerald-900 dark:text-emerald-100 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden`,
  pearlholo: `relative px-10 py-3 bg-white/10 dark:bg-white/5 border border-white/20 text-zinc-900 dark:text-white font-black rounded-xl overflow-hidden group`,
  neonglowborder: `px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-700 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,122,0,0.5)] transition-all duration-300`,
  hardstamp: `relative px-8 py-3 bg-gradient-to-b from-[#f0f0f5] to-[#dcdce5] dark:from-[#1f1f26] dark:to-[#16161e] text-gray-800 dark:text-gray-200 font-semibold rounded-2xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.12),0_-6px_12px_-6px_rgba(255,255,255,0.6)] dark:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.7),0_-6px_12px_-6px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.16),0_-8px_16px_-8px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.1)] active:shadow-[inset_0_6px_12px_-6px_rgba(0,0,0,0.15),inset_0_-6px_12px_-6px_rgba(255,255,255,0.4)] dark:active:shadow-[inset_0_6px_12px_-6px_rgba(0,0,0,0.5),inset_0_-6px_12px_-6px_rgba(255,255,255,0.08)] transition-all duration-200 active:scale-95`,
  paperfold: `relative px-8 py-3 bg-white text-zinc-900 font-bold border-l-4 border-zinc-900 group`,
  centerpillfill: `relative px-10 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full overflow-hidden group`,
  chromapeak: `px-10 py-3 bg-zinc-900 border border-white/5 rounded-2xl group overflow-hidden shadow-xl active:scale-95 transition-all`,
  tapecassette: `relative px-10 py-4 bg-[#e5e0d8] dark:bg-[#2a2a2a] text-[#d97706] font-black rounded-lg border-x-8 border-t-2 border-b-8 border-zinc-400 dark:border-zinc-800 shadow-xl group overflow-hidden active:translate-y-1 active:border-b-4 transition-all`,
  strikereveal: `relative px-2 py-1 text-zinc-400 font-bold group`,
  chevronexpand: `flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group`,
  cybergradient: `relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group`,
  dashspin: `relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group`,
  dreamyblur: `px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100`,
  floatinglabel: `relative group inline-block`,
  shadowflight: `px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300`,
  sketchyarchitecture: `px-8 py-3 border-2 border-zinc-900 text-zinc-900 font-bold rounded-[20%_80%_20%_80%/80%_20%_80%_20%] hover:rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300`,
  powerbounce: `flex items-center gap-3 px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-black rounded-2xl group hover:bg-zinc-900 hover:text-white transition-all duration-300`,
  decoupledshadow: `relative group`,
  smallindicator: `relative px-8 py-3 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl group overflow-hidden`,
  lockplate: `px-8 py-3 bg-zinc-200 text-zinc-600 font-black border-4 border-zinc-400 shadow-[inset_0_2px_4px_white,4px_4px_0_0_#18181b] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase tracking-tighter`,
  leatherpress: `relative px-10 py-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-amber-50 font-bold rounded-lg border-4 border-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_8px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_8px_rgba(0,0,0,0.6),0_12px_24px_rgba(0,0,0,0.5)] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-1 overflow-hidden group`,
  morphingsquircle: `px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl hover:rounded-full transition-all duration-700 hover:scale-105`,
  neobrutalhard: `px-8 py-3 bg-orange-400 text-black font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2 transition-all`,
  pillwell: `relative px-12 py-3.5 bg-gradient-to-b from-[#ececf1] to-[#dcdce5] dark:from-[#1a1a22] dark:to-[#12121a] text-gray-600 dark:text-gray-400 font-semibold rounded-full shadow-[inset_0_16px_32px_-12px_rgba(0,0,0,0.18),inset_0_-16px_32px_-12px_rgba(255,255,255,0.55)] dark:shadow-[inset_0_16px_32px_-12px_rgba(0,0,0,0.55),inset_0_-16px_32px_-12px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_20px_40px_-14px_rgba(0,0,0,0.22),inset_0_-20px_40px_-14px_rgba(255,255,255,0.65)] dark:hover:shadow-[inset_0_20px_40px_-14px_rgba(0,0,0,0.65),inset_0_-20px_40px_-14px_rgba(255,255,255,0.1)] active:shadow-[inset_0_10px_20px_-8px_rgba(0,0,0,0.15),inset_0_-10px_20px_-8px_rgba(255,255,255,0.4)] transition-all duration-500 active:scale-95 hover:text-gray-900 dark:hover:text-gray-100`,
  softextrude: `relative px-10 py-3.5 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] dark:from-[#1a1a1f] dark:to-[#0f0f14] text-gray-700 dark:text-gray-300 font-semibold rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_-8px_16px_-8px_rgba(255,255,255,0.5)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_-8px_16px_-8px_rgba(255,255,255,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_-10px_20px_-10px_rgba(255,255,255,0.6)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_-10px_20px_-10px_rgba(255,255,255,0.08)] active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.2),inset_0_-8px_16px_-8px_rgba(255,255,255,0.4)] dark:active:shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.6),inset_0_-8px_16px_-8px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95`,
  arcadestick: `w-16 h-16 bg-red-600 rounded-full shadow-[0_8px_0_#991b1b,0_15px_20px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-2 transition-all border-4 border-red-500 flex items-center justify-center`,
  skeuoplastic: `px-8 py-3 bg-zinc-200 text-zinc-600 font-bold rounded-xl border border-zinc-300 shadow-[2px_2px_5px_#b8b9be,-3px_-3px_7px_#ffffff] active:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff] transition-all`,
  bentobox: `flex items-center gap-0 p-2 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-2xl border border-zinc-200 group hover:bg-gradient-to-r hover:from-zinc-200 hover:to-zinc-100 hover:border-zinc-300 hover:shadow-lg active:scale-95 transition-all duration-200`,
};

export function createButton(
  style: keyof typeof ButtonStyles,
  options: ButtonOptions = {}
): CoolButton {
  const className = ButtonStyles[style];
  return new CoolButton({
    ...options,
    className: options.className
      ? `${className} ${options.className}`
      : className,
  });
}

// Simplified API for direct DOM customization
export interface SimpleButtonOptions extends ButtonOptions {
  style?: keyof typeof ButtonStyles;
  padding?: string | null;
  bgcolor?: string | null;
  textcolor?: string | null;
  bordercolor?: string | null;
  glowcolor?: string | null;
}

export function createSimpleButton(options: SimpleButtonOptions = {}): CoolButton {
  const {
    style = 'claymorphic',
    text = 'Button',
    padding,
    bgcolor,
    textcolor,
    bordercolor,
    glowcolor,
    onClick,
    ...rest
  } = options;

  const button = createButton(style, { text, onClick, ...rest });
  const element = button.getElement();

  // Apply custom styles
  if (padding) {
    element.style.padding = padding;
  }
  if (bgcolor) {
    element.style.backgroundColor = bgcolor;
  }
  if (textcolor) {
    element.style.color = textcolor;
  }
  if (bordercolor) {
    element.style.borderColor = bordercolor;
  }
  if (glowcolor) {
    element.style.boxShadow = `0 0 20px ${glowcolor}`;
  }

  return button;
}

// Auto-initialize all buttons with coolbutton attribute
export function initializeButtons(): void {
  if (typeof document === 'undefined') return;

  const buttons = document.querySelectorAll('[coolbutton]');
  buttons.forEach((btn: Element) => {
    const element = btn as HTMLElement;
    const style = (element.getAttribute('coolbutton') || element.getAttribute('data-style') || 'claymorphic') as keyof typeof ButtonStyles;
    const padding = element.getAttribute('padding');
    const bgcolor = element.getAttribute('bgcolor');
    const textcolor = element.getAttribute('textcolor');
    const bordercolor = element.getAttribute('bordercolor');
    const glowcolor = element.getAttribute('glowcolor');
    const onclickAttr = element.getAttribute('onclick');

    const coolBtn = createSimpleButton({
      style,
      text: element.textContent || 'Button',
      padding: padding || undefined,
      bgcolor: bgcolor || undefined,
      textcolor: textcolor || undefined,
      bordercolor: bordercolor || undefined,
      glowcolor: glowcolor || undefined,
      onClick: onclickAttr ? (() => new Function(onclickAttr)()) : undefined,
    });

    const newElement = coolBtn.getElement();
    element.replaceWith(newElement);
  });
}

// Auto-initialize on page load
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeButtons);
  } else {
    initializeButtons();
  }
}
