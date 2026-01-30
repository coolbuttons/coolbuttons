/**
 * Cool Buttons - Universal Package
 * 400+ production-ready button components
 * Works with React, Vue, Svelte, Vanilla JS, and any framework
 * 
 * @example
 * // React usage
 * import { Claymorphic } from 'coolbuttons';
 * 
 * // Vanilla JS usage
 * import { CoolButton } from 'coolbuttons/vanilla';
 * 
 * // Scoped imports
 * import { ModernMinimal } from 'coolbuttons/react';
 */

// ============================================================================
// React Button Components
// ============================================================================
// Re-export all React button components
export * from './react';

// ============================================================================
// Vanilla JS Components
// ============================================================================
// Re-export all Vanilla JS button utilities
export * from './vanilla';

// ============================================================================
// Package Metadata
// ============================================================================
/**
 * Cool Buttons package version
 * @constant
 */
export const version = '1.0.2';

/**
 * Cool Buttons package name
 * @constant
 */
export const name = 'coolbuttons';

/**
 * Package information object
 */
export const packageInfo = {
  name: 'coolbuttons',
  version: '1.0.2',
  description: '400+ production-ready button components',
  repository: 'https://github.com/coolbuttons/coolbuttons',
  homepage: 'https://coolbuttons.dev',
  documentation: 'https://coolbuttons.dev/guide',
  license: 'MIT'
} as const;

