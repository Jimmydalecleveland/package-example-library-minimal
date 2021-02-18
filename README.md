# @jimmydc/package-example-library-minimal

This is an example project using a minimal setup to achieve a ESM tree-shakeable package by Webpack or other bundlers. It's using native Node functionality (currently on Node `14.15.1` LTS), without any bundling or transpiling, to show what's possible with the modern ecosystem.

- The first publish will need public access enabled for scoped packages (e.g. `npm publish --access public`).
- Using the `npm version` command will increase the version and make a tagged commit automatically (e.g. `npm version patch`).
- `"sideEffects": false` field is required for module level tree-shaking by bundlers like Webpack. It is stating that this library has no side effects, but an array of files with side effects can be used if those exist in your library.
- `"type": "module"` field is only required for running locally. Project importing this library don't seem to care if it's there or not.
- The exported modules can be imported using commonjs or ESM imports.
- Having an `export default` in the root does not seem to be a good practice in general. If you ever import that default, it will import the entire library and Webpack cannot tree-shake it away. Even if your library's default export is a simple string, and that is the only thing a user of your library imports into their project, they will get the entire library in their bundle. It seems better to just let the user do `import * as whatever` as a way of importing everything, because that can be tree-shook. This seems to be best practice now for big packages like React as well. (i.e. **DO:** `import * as React from 'react'`; **DO NOT:** `import React from 'react'`).
