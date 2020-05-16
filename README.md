# Use Query Param

[![CircleCI](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master.svg?style=svg)](https://circleci.com/gh/shaolinmkz/useQueryParam/tree/master) [![Maintainability](https://api.codeclimate.com/v1/badges/9abdde7d752cab951b07/maintainability)](https://codeclimate.com/github/shaolinmkz/useQueryParam/maintainability)


A React Hook that extracts query params from a URL query string and returns a queried object.

<a href="https://www.npmjs.com/package/use-query-param" style="display: inline-flex; justify-content: space-between; align-items: center; text-decoration: none; width:100px; height: 15px; background: #000; padding: 5px; border-radius: 5px; border: 0.5px solid #fff"><img src="https://res.cloudinary.com/shaolinmkz/image/upload/v1588875312/Random-Icons/react/npm_1.png" width="30"> <span style="color: #fff; font-size: 9pt">Published</span></a> <a href="https://reactjs.org/" style="display: inline-flex; justify-content: space-between; align-items: center; text-decoration: none; width:100px; height: 15px; background: #000; padding: 5px; border-radius: 5px; border: 0.5px solid #fff"><img src="https://res.cloudinary.com/shaolinmkz/image/upload/v1588509178/Random-Icons/react/react-icon.gif" width="20"> <span style="color: #fff; font-size: 9pt">Built With</span></a>


# Installation

```
npm install use-query-param
```

# Usage

## Case One:

##### Importing module into file

```
import { useQueryParam } from 'use-query-param';

OR

const { useQueryParam } = require('use-query-param');
```

Without an argument
```
import { useEffect } from 'react'; 

const Component = () => {
  const queryParams = useQueryParam(); // <== Hook

  useEffect(() => {
      console.log(queryParams);
      // result will be an object of query params
  }, [])
}
```

With an argument
```
import { useEffect } from 'react'; 

const Component = () => {
    const queryString = '?typescript=true&hook=true'; // <== string format
    const queryParams = useQueryParam(queryString); // <== Hook

  useEffect(() => {
      console.log(queryParams);
     // Output: { typescript: 'true', hook: 'true' }
  }, []);
}

```

## Case Two:

##### Importing module into file

```
import { getQueryParams } from 'use-query-param';

OR

const { getQueryParams } = require('use-query-param');
```

Without an argument
```
const queryParam = getQueryParams(); // <== This is not a hook

If a URL query string exist on the browser address bar you will get an output with all the query params OR an empty object
// Output: { token: 'jdkjada9s7d9akadbjkss893asda89' }

OR

// Output: {} => Empty object
```

With an argument
```
const queryString = '?typescript=true&hook=true';
const queryParam = getQueryParams(queryString); // <== This is not a hook

// Output: { typescript: 'true', hook: 'true' }
```

### Note
`Note that the getQueryParams is not a hook, rather an auxiliary method, always use useQueryParam hook`
