// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'src/resource-axios.js',
  output: {
    file: 'dist/resource-axios.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ],
};
