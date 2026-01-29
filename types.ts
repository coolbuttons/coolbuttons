import React from 'react';

export enum ButtonCategory {
  ESSENTIAL = 'Essential',
  NEUMORPHIC = 'Neumorphic',
  GLASSMORPHIC = 'Glassmorphic',
  SKEUOMORPHIC = 'Skeuomorphic',
  RETRO = 'Retro',
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
  description: string;
  code: string; // Tailwind JSX
  tailwind?: string; // Tailwind CSS version
  typescript?: string; // Full React Component code
  react?: string; // React with inline styles or Tailwind
  html?: string; // Plain HTML
  css?: string; // Raw CSS version
  javascript?: string; // Vanilla JavaScript version
}
