import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const filename = pkg.main.replace('.js', '').replace('dist/', '');
const outputDir = 'dist';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: `src/${filename}.ts`,
  output: [
    {
      dir: outputDir,
      entryFileNames: `${filename}.min.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'es',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'umd',
      sourcemap: true,
      name: 'CustomErrorService',
    },
    // { dir: outputDir, entryFileNames: `${filename}.[format].js`, format: 'iife', sourcemap: true, name: 'CustomErrorService' }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    production && terser(),
  ],
};
