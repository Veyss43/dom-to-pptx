import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    // ESM build for modern bundlers
    {
      file: 'dist/dom-to-pptx.mjs',
      format: 'es',
      sourcemap: false,
    },
    // CommonJS build for Node / require()
    {
      file: 'dist/dom-to-pptx.cjs',
      format: 'cjs',
      sourcemap: false,
      exports: 'named',
    },
    // UMD build for direct browser usage via script tag
    {
      file: 'dist/dom-to-pptx.min.js',
      format: 'umd',
      name: 'domToPptx',
      esModule: false,
      globals: {
        pptxgenjs: 'PptxGenJS',
      },
    },
  ],
  plugins: [resolve(), commonjs()],
  external: ['pptxgenjs'],
};
