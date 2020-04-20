## Base64Coder

### Using:
**1.Create a file with export data.**

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

**2.Import your file.**
```javascript
import data from './data.loader';

(function showDecode() {
    console.log(data);
})();

(function showEncode() {
    const decodeData = {};

    for(let item in data) {
        decodeData[item] = Buffer.from(data[item], 'base64').toString('utf-8');
    }

    console.log(decodeData);
})();
```

**3.Webpack.**

Add loader for your js files with mask.

```none
module: {
    rules: [{
        test: /\.loader.json$/,
        use: [{
            loader: path.resolve('./loader/custom-loader.js'),
        }]
    },
    ...
    ],
}
```
