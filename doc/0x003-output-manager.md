### 0x001 多入口配置
- 添加`src/print.js`
```
export default function printMe() {
  console.log('I get called from print.js!');
}
```
- 引用
```javascript
import _ from 'lodash'
import printMe from './print.js'

function component() {
    var element       = document.createElement('div');
    var btn           = document.createElement('button')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML     = 'Click me and check the console!';
    btn.onclick       = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
```
- 修改`dist/index,js`
```html
<html>
<head>
    <title>Output Management</title>
    <script src="./print.bundle.js"></script>

</head>
<body>
<script src="./app.bundle.js"></script>
</body>
</html>
```
- 修改配置文件
```javascript
const path = require('path');

module.exports = {
    entry: {
        app  : './src/index.js',
        print: './src/print.js'
    },

    output: {
        filename: '[name].bundle.js',
        path    : path.resolve(__dirname, 'dist')
    }
};
```
- 打包
```
$ webpack
Hash: 6df186d7196b0723bc8a
Version: webpack 3.5.6
Time: 665ms
          Asset     Size  Chunks                    Chunk Names
  app.bundle.js   545 kB    0, 1  [emitted]  [big]  app
print.bundle.js  2.82 kB       1  [emitted]         print
   [0] ./src/print.js 165 bytes {0} {1} [built]
   [1] ./src/index.js 516 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module

```
### 0x002 自动生成模板文件
- 安装`html-webpack-plugin`
```
npm install --save-dev html-webpack-plugin
```
- 修改配置
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry  : {
        app  : './src/index.js',
        print: './src/print.js'
    },
    output : {
        filename: '[name].bundle.js',
        path    : path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
};
```
- 打包
```
$ webpack
Hash: 00ba97f2e0d7e6662669
Version: webpack 3.5.6
Time: 1102ms
          Asset       Size  Chunks                    Chunk Names
  app.bundle.js     545 kB    0, 1  [emitted]  [big]  app
print.bundle.js    2.82 kB       1  [emitted]         print
     index.html  254 bytes          [emitted]         
   [0] ./src/print.js 165 bytes {0} {1} [built]
   [1] ./src/index.js 516 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```

### 0x003 清理`dist`文件夹，为生成文件做准备
- 安装`clean-webpack-plugin`
```
npm install clean-webpack-plugin --save-dev
```
- 修改配置文件
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry  : {
        app  : './src/index.js',
        print: './src/print.js'
    },
    output : {
        filename: '[name].bundle.js',
        path    : path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
};

```
- 打包
```
$ webpack
clean-webpack-plugin: /MY_PROJECT/PROJECT_OWN/webpack-study/src/0x003-output-management/dist has been removed.
Hash: 00ba97f2e0d7e6662669
Version: webpack 3.5.6
Time: 1169ms
          Asset       Size  Chunks                    Chunk Names
  app.bundle.js     545 kB    0, 1  [emitted]  [big]  app
print.bundle.js    2.82 kB       1  [emitted]         print
     index.html  254 bytes          [emitted]         
   [0] ./src/print.js 165 bytes {0} {1} [built]
   [1] ./src/index.js 516 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```
