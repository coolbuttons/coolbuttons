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

// Button style templates
export const ButtonStyles = {
  claymorphic: `px-6 py-3 bg-indigo-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] border border-indigo-400/30 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all`,
  
  glasscard: `px-6 py-3 bg-white/30 backdrop-blur-md text-white font-black uppercase tracking-widest text-[10px] rounded-2xl border border-white/40 hover:bg-white/40 active:scale-95 transition-all`,
  
  neumorphic: `px-6 py-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-3xl shadow-lg shadow-gray-300/50 dark:shadow-black/50 hover:shadow-xl active:scale-95 transition-all`,
  
  brutalist: `px-6 py-3 bg-black text-white font-black uppercase tracking-widest text-[10px] border-2 border-black hover:bg-white hover:text-black active:scale-95 transition-all`,
  
  neonborder: `px-6 py-3 bg-black text-orange-500 font-black uppercase tracking-widest text-[10px] border-2 border-orange-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 transition-all`,
  
  gradientshadow: `px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black uppercase tracking-widest text-[10px] rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all`,
  
  modernminimal: `px-6 py-3 bg-white text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-300 rounded-lg hover:bg-zinc-100 active:scale-95 transition-all`,
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
