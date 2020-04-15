# Directory Exist
Allows to verify the existence of any directory on the computer.

## Install
`$ npm install @brpereyra/directory-exist` 

## Example
```js
    const de = require('@brpereyra/directory-exist');
    const exists = de.directoryExists('path/to/directory');

    console.log(exists); // return true if the directory exists
```

Or

```js
    const { directoryExists } = require('@brpereyra/directory-exist');
    const exists = directoryExists('path/to/directory');

    console.log(exists); // return true if the directory exists
```