### 0x001 安装`webpack`
---
```
$ npm install webpack // 本地安装webpack
$ npm install webpack -g // 全局安装webpack
$ npm install webpack --global  //全局安装webpack
$ npm install webpack --save-dev // 本地安装webpack并保存到`devDependencies`节点

$ npm install webpack@beta // 按照`tag`安装
$ npm install webpack/webpack#<tagname/branchname> 按照`gitURL`安装
```
如果全局安装`webpack`，可以直接使用`webpack`调用`webpack`，如果使用本地安装，必须使用`node_modules/.bin/webpack`调用。

### 0x002 初始化项目
- 新建项目
```
$ mkdir 0x001-getting-start
$ cd 0x001-getting-start
$ mkdir 1-old-architecture
$ cd 1-old-artiecture
```
- 项目结构
```
  1-old-artiecture
  |- index.html
  |- /src
    |- index.js
```
- `src/index.js`
```javascript
function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component());
```
- `index.html`
```html
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```
在这个项目中，使用的是陈旧的管理方式，`index.js`是我们的业务代码，我们的项目同时依赖`lodash`项目，这种方式存在几个问题:
- 外部依赖不明显
- 对依赖的加载顺序有要求
- 需要手动管理依赖，如果一个依赖不再使用，浏览器依旧请求。

### 0x003 合并依赖
- 修改项目结构
```
$ mkdir 2-new-architecture-with-webpack
  2-new-architecture-with-webpack
  |- package.json
  |- /dist
    |- index.html
  |- /src
    |- index.js
```
- 安装`lodash`
```
$ npm install --save lodash
```
- 修改`index.js`
```javascript
import _ from 'lodash'
function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component());
```
- 修改`dist/index.html`
```html
<html>
<head>
    <title>Getting Started</title>
</head>
<body>
<script src="bundle.js"></script></body>
</html>
```
- 打包
```
$ ./node_modules/.bin/webpack src/index.js dist/bundle.js
Hash: d0ce618fec68da70ac31
Version: webpack 3.5.6
Time: 672ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 382 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
```
- 浏览效果
此时打开`dist/index.html`,我们将会看到`Hello webpack`。

### 0x004 使用配置文件
- 创建`webpack.config.js`
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
- 重新打包
执行`./node_modules/.bin/webpack`


### 0x005 总结
在0x003的项目中，我们在业务中，以模块的形式引入了`lodash`，使得页面上的`lodash`的`script`标签消失了，同时在`index.js`，也不会疑惑`_`从何处而来，应为显式的声明引入了`lodash`依赖。
同时，使用`./node_modules/.bin/webpack`指令打包`bundle`，将`lodash`和`index.js`打包在了一起，方便了依赖管理，当然这不是最佳事件，将会在接下去的文章中，慢慢消除这种副作用。
