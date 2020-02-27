import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

module.exports = {
  input: "./src/index.js",
  output: {
    file: outputFile,
      format: "cjs"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ],
  external: id => /^react|styled-components/.test(id)
}