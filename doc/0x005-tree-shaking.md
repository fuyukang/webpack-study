### 0x001 问题
- 添加`src/math.js`
```javascript
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```
- 添加`index.js`
```javascript
import {cube} from './math.js';

function component() {
    var element       = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}
document.body.appendChild(component());
```
- 打包
```
$ webpack
clean-webpack-plugin: /MY_PROJECT/PROJECT_OWN/webpack-study/src/0x005-tree-shaking/1-before/dist has been removed.
Hash: 7107377e2d3ddf54cfde
Version: webpack 3.5.6
Time: 704ms
        Asset       Size  Chunks             Chunk Names
app.bundle.js    8.15 kB       0  [emitted]  app
   index.html  192 bytes          [emitted]  
   [0] ./src/index.js 368 bytes {0} [built]
   [1] ./src/math.js 178 bytes {0} [built]
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules

```
- 查看`app.bundle.js`
```javascript
"use strict";
/* unused harmony export square */
/* harmony export (immutable) */ __webpack_exports__["a"] = cube;
/**
 * NAME : print
 * USER : FollowWinter
 * DATE : 2017/9/14
 * SUMMARY :
 */
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

```

### 0x002 压缩
- 安装`uglifyjs-webpack-plugin`
```
npm i --save-dev uglifyjs-webpack-plugin
```
- 修改配置
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry  : {
        app  : './src/index.js',
    },
    output : {
        filename: '[name].bundle.js',
        path    : path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Tree Shaking'
        })
    ],
};
```
- 打包
```
$ webpack
clean-webpack-plugin: /MY_PROJECT/PROJECT_OWN/webpack-study/src/0x005-tree-shaking/1-after/dist has been removed.
Hash: 7107377e2d3ddf54cfde
Version: webpack 3.5.6
Time: 676ms
        Asset       Size  Chunks             Chunk Names
app.bundle.js  784 bytes       0  [emitted]  app
   index.html  187 bytes          [emitted]  
   [0] ./src/index.js 368 bytes {0} [built]
   [1] ./src/math.js 178 bytes {0} [built]
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules

```
- 查看`app.bundle.js`
```javascript
!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);document.body.appendChild(function(){var e=document.createElement("pre");return e.innerHTML=["Hello webpack!","5 cubed is equal to "+Object(r.a)(5)].join("\n\n"),e}())},function(e,n,t){"use strict";function r(e){return e*e*e}n.a=r}]);
```

