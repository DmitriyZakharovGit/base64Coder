## Base64Coder

### Info
This library will help you encode data to hide it after building.

[NPM Link](https://www.npmjs.com/package/base64coder)

### Using:
1.Create a file with export data (name ex.: 'data.loader.js').

Example:
```javascript
module.exports = {
    'header': 'Назовите столицу России?',
    'questions': [
        {
            'text': 'Москва',
            'isRight': true
        },
     ...
    ]
};
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

### Min version
You can use a minified version:
1. In loader change name ```'base64coder'``` to ```'base64coder/index.min.js'```;
2. In controller change import lib from ```import decode from 'base64coder/decode';``` to ```import decode from 'base64coder/decode.min';```

In the future minified version will be basic.
