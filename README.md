[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

# Directory Exist

Allows to verify the existence of any directory on the computer.

# Install

`$ npm install @brpereyra/directory-exists`

# Examples

```js
const de = require("@brpereyra/directory-exists");
const exists = de.directoryExists("path/to/directory");

console.log(exists); // return true if the directory exists
```

Or

```js
const { directoryExists } = require("@brpereyra/directory-exists");
const exists = directoryExists("path/to/directory");

console.log(exists); // return true if the directory exists
```

# License

[MIT](https://github.com/brpereyra/directory-exists/blob/master/LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/@brpereyra/directory-exists.svg
[npm-url]: https://www.npmjs.com/package/@brpereyra/directory-exists
[downloads-image]: https://img.shields.io/npm/dm/@brpereyra/directory-exists.svg
[downloads-url]: https://npmcharts.com/compare/@brpereyra/directory-exists?minimal=true
