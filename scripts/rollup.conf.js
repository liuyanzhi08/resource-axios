// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/resource-axios.js',
  output: {
    file: 'dist/resource-axios.js',
    format: 'umd',
    name: 'resource',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        'external-helpers',
        'transform-async-to-generator',
      ],
      babelrc: false,
    }),
  ],
};
