import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'foo.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  external: ['react', '@babel/runtime'],
  plugins: [
    resolve(),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
  ],
}
