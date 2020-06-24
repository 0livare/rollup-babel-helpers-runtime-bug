Running babel through rollup still includes babel helper functions in the bundle, even though `babelHelpers` is set to `runtime` and `@babel/plugin-transform-runtime` is enabled.

The helper functions are not included in the output if babel is run directly `yarn babel foo.js`.

The `@rollup/babel-plugin`'s documentation says that this setup should work here: https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers

## To Reproduce

Clone this repo and run:

```bash
yarn
yarn build
```

Then look at the output file at `dist/foo.js`. Notice that it has `_classCallCheck`, `_defineProperties`, and `_createClass` babel helper functions injected at the top.

Now run `yarn babel foo.js` and see that those helper functions are `import`ed instead of injected, as they should be with this setup.
