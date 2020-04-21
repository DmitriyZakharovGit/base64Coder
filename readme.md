# Base64Coder

[![NPM version](https://img.shields.io/npm/v/base64coder.svg)](https://www.npmjs.com/package/base64coder)

## Installing

You can install base64coder using npm:

```
$ npm install base64coder
```


## Info

This library will help you encode data to hide it after building in source.

## Using:

1.Create a file with export data (name ex.: 'data.loader.js').

Example:
```javascript
const data1 = {
    'header': 'What is the capital of Russia?',
    'questions': [{
        'text': 'Moscow',
        'isRight': true
    }]
};

const data2 = {
  'title': 'JS or JSON?',
  'text': 'This is page created for ...'
};

// Need for export data in loader (create variable with name base64data)
var base64data = [data1, data2];
module.exports = base64data;
```

2.Import data in your controller and decode method.
```javascript
import decode from 'base64coder/decode';

import data from './data.loader';

(function showDecode() {
    console.log('showDecode', data);
})();

(function showEncode() {
    console.log('showEncode', decode(data));
})();
```

3.Webpack.

Add loader for your js files with mask. You can choose any mask.

```none
...

module: {
    rules: [{
        test: /\.loader.js$/,
        use: [{
            loader: 'base64coder',
        }]
    },
    ...
    ],
}
```

## Min version
You can use a minified version:
1. In loader change name ```'base64coder'``` to ```'base64coder/index.min.js'```;
2. In controller change import lib from ```import decode from 'base64coder/decode';``` to ```import decode from 'base64coder/decode.min';```

In the future minified version will be basic.
