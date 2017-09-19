### 0x001 多入口
- 配置`webpack.config.js`
```javascript
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
         })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```
- 添加第二个模块
```javascript
// src/another-module.js
import _ from 'lodash';

console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
);

```

### 0x002 动态加载
- 修改`webpack.config.js`
```javascript
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```
- 修改代码
```javascript
// src/index.js
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
})
```
