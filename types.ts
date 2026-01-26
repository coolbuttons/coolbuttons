
export enum ButtonCategory {
  ESSENTIAL = 'Essential',
  NEUMORPHIC = 'Neumorphic',
  GLASSMORPHIC = 'Glassmorphic',
  SKEUOMORPHIC = 'Skeuomorphic',
  RETRO = 'Retro/3D',
  GRADIENT = 'Gradient',
  ANIMATED = 'Animated',
  MINIMAL = 'Minimal',
  EXPERIMENTAL = 'Experimental'
}

export interface ButtonDesign {
  id: string;
  name: string;
  category: ButtonCategory;
  component: React.FC;
  code: string; // Tailwind JSX
  typescript?: string; // Full React Component code
  css?: string; // Raw CSS version
  description: string;
}
