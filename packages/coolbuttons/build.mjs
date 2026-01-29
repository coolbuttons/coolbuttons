/**
 * Build script for the main coolbuttons package
 * Generates CommonJS and ESM bundles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create CommonJS index.js
const cjsIndex = `/**
 * Cool Buttons - Universal Package (CommonJS)
 */

module.exports = {
  ...require('@coolbuttons/react'),
  ...require('@coolbuttons/vanilla'),
  version: '1.0.2',
  name: 'coolbuttons'
};
`;

// Create ESM index.esm.js
const esmIndex = `/**
 * Cool Buttons - Universal Package (ES Module)
 */

export * from '@coolbuttons/react';
export * from '@coolbuttons/vanilla';

export const version = '1.0.2';
export const name = 'coolbuttons';
`;

// Create CommonJS React entry
const cjsReact = `/**
 * Cool Buttons - React Entry (CommonJS)
 */

module.exports = require('@coolbuttons/react');
`;

// Create ESM React entry
const esmReact = `/**
 * Cool Buttons - React Entry (ES Module)
 */

export * from '@coolbuttons/react';
`;

// Create CommonJS Vanilla entry
const cjsVanilla = `/**
 * Cool Buttons - Vanilla JS Entry (CommonJS)
 */

module.exports = require('@coolbuttons/vanilla');
`;

// Create ESM Vanilla entry
const esmVanilla = `/**
 * Cool Buttons - Vanilla JS Entry (ES Module)
 */

export * from '@coolbuttons/vanilla';
`;

// Create TypeScript declaration files
const dtsIndex = `/**
 * Cool Buttons - Universal Package
 * Re-exports from both React and Vanilla packages
 */

export * from '@coolbuttons/react';
export * from '@coolbuttons/vanilla';

export declare const version: string;
export declare const name: string;
`;

const dtsReact = `export * from '@coolbuttons/react';
`;

const dtsVanilla = `export * from '@coolbuttons/vanilla';
`;

// Write files
fs.writeFileSync(path.join(distDir, 'index.js'), cjsIndex);
fs.writeFileSync(path.join(distDir, 'index.esm.js'), esmIndex);
fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsIndex);

fs.writeFileSync(path.join(distDir, 'react.js'), cjsReact);
fs.writeFileSync(path.join(distDir, 'react.esm.js'), esmReact);
fs.writeFileSync(path.join(distDir, 'react.d.ts'), dtsReact);

fs.writeFileSync(path.join(distDir, 'vanilla.js'), cjsVanilla);
fs.writeFileSync(path.join(distDir, 'vanilla.esm.js'), esmVanilla);
fs.writeFileSync(path.join(distDir, 'vanilla.d.ts'), dtsVanilla);

console.log('✅ Build complete! Generated files:');
console.log('  - dist/index.js (CommonJS)');
console.log('  - dist/index.esm.js (ES Module)');
console.log('  - dist/index.d.ts (TypeScript declarations)');
console.log('  - dist/react.* (React entry)');
console.log('  - dist/vanilla.* (Vanilla JS entry)');
