# Directory Exist

Allows to verify the existence of any directory on the computer.

## Install

`$ npm install @brpereyra/directory-exists`

## Example

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
