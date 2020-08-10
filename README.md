# Use Query Param

[![CircleCI](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master.svg?style=svg)](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master) [![Maintainability](https://api.codeclimate.com/v1/badges/f9bef3d76b74c6c503c0/maintainability)](https://codeclimate.com/github/shaolinmkz/useQueryParam/maintainability) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/npm/v/use-query-param.svg)](https://www.npmjs.com/package/use-query-param) [![Total Download](https://img.shields.io/npm/dt/use-query-param.svg)](https://www.npmjs.com/package/use-query-param)


A React Hook that extracts query params from a URL query string and returns a queried object.

<a href="https://www.npmjs.com/package/use-query-param" style="display: inline-flex; justify-content: space-between; align-items: center; text-decoration: none; width:100px; height: 15px; background: #000; padding: 5px; border-radius: 5px; border: 0.5px solid #fff"><img src="https://res.cloudinary.com/shaolinmkz/image/upload/v1588875312/Random-Icons/react/npm_1.png" width="30"> <span style="color: #fff; font-size: 9pt">Published</span></a> <a href="https://reactjs.org/" style="display: inline-flex; justify-content: space-between; align-items: center; text-decoration: none; width:100px; height: 15px; background: #000; padding: 5px; border-radius: 5px; border: 0.5px solid #fff"><img src="https://res.cloudinary.com/shaolinmkz/image/upload/v1588509178/Random-Icons/react/react-icon.gif" width="20"> <span style="color: #fff; font-size: 9pt">Built With</span></a>


# Installation

```bash
npm install use-query-param
```

# Usage
```js
import { useQueryParam, getQueryParams, setQueryParams } from 'use-query-param';
```


## Case One:

##### Importing module into file

```js
import { useQueryParam } from 'use-query-param';

OR

const { useQueryParam } = require('use-query-param');
```

Without an argument
```jsx
import { useEffect } from 'react'; 

const Component = () => {
  const { queryParams } = useQueryParam(); // <== HOOK

  useEffect(() => {
      console.log(queryParams);
      // result will be an object of query params
  }, [queryParams])
}
```

With an argument
```jsx
import { useEffect } from 'react'; 

const Component = () => {
    const queryString = 'http://localhost?typescript=true&hook=true';
    const  { queryParams } = useQueryParam(queryString);

  useEffect(() => {
      console.log(queryParams);
     // Output: { typescript: 'true', hook: 'true' }
  }, [queryParams]);
}

```

## Case Two:

##### Importing module into file
The getQueryParams takes a string and returns an object

```js
import { getQueryParams } from 'use-query-param';

OR

const { getQueryParams } = require('use-query-param');
```

Without an argument
```jsx
const { queryParams } = getQueryParams(); // <== This is not a hook

If a URL query string exist on the browser address bar you will get an output with all the query params OR an empty object
// Output: { token: 'jdkjada9s7d9akadbjkss893asda89' }

OR

// Output: {} => Empty object
```

With an argument
```js
const queryString = '?typescript=true&hook=true';
const { queryParams } = getQueryParams(queryString); // <== This is not a hook

// Output: { typescript: 'true', hook: 'true' }
```

## Case Three:

##### Importing module into file
The setQueryParams takes an object and returns a query formatted string

```js
import { setQueryParams } from 'use-query-param';

OR

const { setQueryParams } = require('use-query-param');
```


Without an argument
```js
const { queryString } = setQueryParams(); // <== This is not a hook

// Output: '?token='jdkjada9s7d9akad....'
```

With an argument
```js
const queryObject = { typescript: 'true', hook: 'true' };
const { queryString } = getQueryParams(queryString); // <== This is not a hook

// '?typescript=true&hook=true'
```

### Note
Note that the getQueryParams and setQueryParams are not hooks, rather they are auxiliary functions
