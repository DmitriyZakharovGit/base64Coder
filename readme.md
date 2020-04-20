## Base64Coder

### Info
This library will help you encode data to hide it after building.

[NPM Link](https://www.npmjs.com/package/base64coder)

### Using:
#####1.Create a file with export data.

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

#####2.Import data in your controller and decode method.
```javascript
import decode from 'base64coder/decode';

import data from './data.loader';

(function showDecode() {
    console.log(data);
})();

(function showEncode() {
    console.log(decode(data));
})();
```

#####3.Webpack.

Add loader for your js files with mask. You can choose any mask.

```none
...

module: {
    rules: [{
        test: /\.fileMask.js$/,
        use: [{
            loader: 'base64coder',
        }]
    },
    ...
    ],
}
```
