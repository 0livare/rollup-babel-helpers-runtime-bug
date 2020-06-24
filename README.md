Running babel through rollup still includes babel helper functions in the bundle, even though `babelHelpers` is set to `runtime` and `@babel/plugin-transform-runtime` is enabled.

The helper functions are not included in the output if babel is run directly `yarn babel foo.js`.

The `@rollup/babel-plugin`'s documentation says this will work here: https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
