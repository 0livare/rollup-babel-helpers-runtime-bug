Running babel through rollup still includes babel helper functions in the bundle, even though `babelHelpers` is set to `runtime` and `@babel/plugin-transform-runtime` is enabled.

The helper functions are not included in the output if babel is run directly `yarn babel foo.js`.
