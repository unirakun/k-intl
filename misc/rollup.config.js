import path from 'path'
import fs from 'fs'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  input: pkg['jsnext:main'] || 'src/index.js',
  output: {
    exports: 'named',
    name: pkg.amdName || pkg.name,
    file: pkg.main,
    format: process.env.FORMAT || 'umd',
    sourcemap: path.resolve(pkg.main),
    globals: {
      react: 'React',
      'fbjs/lib/shallowEqual': 'shallowEqual',
      'intl-messageformat': 'IntlMessageFormat',
      'k-intl/locale-data/en': 'defaultLocaleData',
    },
  },
  plugins: [
    babel({ externalHelpers: true }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    uglify(),
  ],
  external: [
    'redux',
    'react',
    'fbjs/lib/shallowEqual',
    'intl-messageformat',
    'k-intl/locale-data/en',
  ],
}
