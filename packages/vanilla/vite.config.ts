import { resolve } from 'path';

export default {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CoolButtonsVanilla',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js';
        if (format === 'umd') return 'index.umd.js';
        if (format === 'iife') return 'coolbuttons.min.js';
        return `index${format === 'es' ? '.esm' : ''}.js`;
      }
    },
    rollupOptions: {
      output: {
        // For IIFE format (CDN)
        globals: {
          // Add global variable mappings if needed
        }
      }
    }
  },
};
