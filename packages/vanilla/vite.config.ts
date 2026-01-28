import { resolve } from 'path';

export default {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CoolButtonsVanilla',
      formats: ['es', 'umd'],
      fileName: (format) => `index${format === 'es' ? '.esm' : ''}.js`,
    },
  },
};
