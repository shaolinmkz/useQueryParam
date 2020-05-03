# Use Query Param

[![CircleCI](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master.svg?style=svg)](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master)

A React Hook that extracts query params from a URL query string and returns a queried object.

<img width="30" height="30" src="https://res.cloudinary.com/shaolinmkz/image/upload/v1588509178/Random-Icons/react/react-icon.gif" />


### Installation

```
npm install use-query-param
```

### Importing module into file

```
import useQueryParam from 'use-query-param';

OR

const useQueryParam = require('use-query-param');
```

### Usage

Without an argument
```
const queries = useQueryParam();

If a URL query string exist on the browser address bar you will get an output with all the query params OR an empty object
// Output: { token: 'jdkjada9s7d9akadbjkss893asda89' }

OR

// Output: {} => Empty object
```

With an argument
```
const queryString = '?typescript=true&hook=true';
const queries = useQueryParam(queryString);

// Output: { typescript: 'true', hook: 'true' }
```

### Note
Hooks are functions.
This Hook is not a named export.
Thus you can use it on any Frontend `framework` or `library` without having to specify the `use` prefix.

Example:
```
import getQueryParam from 'use-query-param';

const queryString = '?typescript=true&hook=true';
const queries = getQueryParam(queryString);

// Output: { typescript: 'true', hook: 'true' }
```

This will prevent the React Linter from treating it as a Hook.
