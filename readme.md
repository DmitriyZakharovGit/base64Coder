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

## Examples

You can open examples (click on candy image):

<a href="https://github.com/DmitriyZakharovGit/base64Coder/tree/master/examples/1">
    <img src="https://site-images.similarcdn.com/url?url=https%3A%2F%2Flh3.googleusercontent.com%2FAx2wQYxjDITuZEpc6K9EDYPG7C839tb4PApia4Tmf18u8XehB-twqhVgDVPgxxExkr4%3Ds180&h=c784111a3b195f517e8b3886bd533f4fec7fcb3a66a9d6c5e79a03d0a0fc32b8" width="80">
</a>
