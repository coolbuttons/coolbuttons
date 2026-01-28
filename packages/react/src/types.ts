import { ReactNode, FC } from 'react';

export enum ButtonCategory {
  ESSENTIAL = 'Essential',
  RETRO = 'Retro',
  MODERN = 'Modern',
  GLASSMORPHIC = 'Glassmorphic',
  NEUMORPHIC = 'Neumorphic',
  NEON = 'Neon',
  GRADIENT = 'Gradient',
  MINIMAL = 'Minimal',
  ANIMATED = 'Animated',
  EXPERIMENTAL = 'Experimental',
}

export interface ButtonDesign {
  id: string;
  name: string;
  category: ButtonCategory;
  component: FC;
  typescript?: string; // Full React Component code
  css?: string; // Raw CSS version
  description: string;
  code: string;
}

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}
