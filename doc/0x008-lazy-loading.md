### 0x001 `webpack.config.js`
```javascript
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```
### 0x002 `index.js`
```javascript
 import _ from 'lodash';

 function component() {
     var element = document.createElement('div');
     var button = document.createElement('button');
     var br = document.createElement('br');

     button.innerHTML = 'Click me and look at the console!';
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     element.appendChild(br);
     element.appendChild(button);
        
     button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
         var print = module.default;

         print();
     });

     return element;
 }

 document.body.appendChild(component());
```
0x003 `print.js`
```javascript
import _ from 'lodash';

console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
);

```