### 0x001 `source-map`
- 修改配置
```
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
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
};
```
- 添加错误
```javascript
//src/print.js
export default function printMe() {
    cosole.log('I get called from print.js!');
}
```
- 打包
```
$ webpack
clean-webpack-plugin: /MY_PROJECT/PROJECT_OWN/webpack-study/src/0x004-development/1-source-map/dist has been removed.
Hash: 724328bf44b4425da23b
Version: webpack 3.5.6
Time: 1388ms
          Asset       Size  Chunks                    Chunk Names
  app.bundle.js    1.44 MB    0, 1  [emitted]  [big]  app
print.bundle.js    6.66 kB       1  [emitted]         print
     index.html  254 bytes          [emitted]         
   [0] ./src/print.js 164 bytes {0} {1} [built]
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
- 查看`index.html`并在点击按钮后查看控制台
```
Uncaught ReferenceError: cosole is not defined
    at HTMLButtonElement.printMe (print.js:8)
```

### 0x002 选择一个开发工具
1. 使用监听模式
```
$ webpack -w 
$ webpack --watch
```
2. 使用`webpack-dev-server`
- 修改`webpack.config.js`
```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };

```
- 启动
```
  $ webpack-dev-server --open
```
3. 使用`webpack-dev-middleware`
- 安装必须依赖
```
npm install --save-dev express webpack-dev-middleware
```
- 修改配置文件
```javascript
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };
```
- 添加`server.js`
```javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```
- 启动
```
node server.js
```
### 0x004 调整编辑器
- `Sublime Text 3`： 添加 `atomic_save: "false"`到配置
- `IntelliJ`： 禁用`safe write`设置
- `Vim`：添加`:set backupcopy=yes`到设置
- `WebStorm`： 禁用`safe write`设置
 