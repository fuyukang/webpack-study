### 0x001 安装`webpack`合并工具
```
npm install --save-dev webpack-merge
```
### 0x002 将`webpack.config.js`分离成3个配置文件
- `webpack.common.js`
> 这个文件是通用的`webpack`基本配置文件，完成了输入输出的设置
```javascript
 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: {
         app: './src/index.js'
       },
   plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
               title: 'Production'
     })
   ],
   output: {
         filename: '[name].bundle.js',
             path: path.resolve(__dirname, 'dist')
       }
 };
```
- `webpack.dev.js`
> 这个文件是开发环境使用的配置文件，合并了基本配置文件内容，同时完成了本地服务器的配置和开发工具的配置，用于开发期间。
```javascript
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

     module.exports = merge(common, {
       devtool: 'inline-source-map',
       devServer: {
         contentBase: './dist'
       }
 });
```
- `webpack.pro.js`
> 这个文件是生成环境使用的配置文件，合并了基本配置文件的内容，同时完成了对生产环境打包的需求，譬如文件压缩之类的，用于打包部署生产环境文件。
```javascript
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const webpack = require('webpack')
 const common = require('./webpack.common.js');

     module.exports = merge(common, {
       plugins: [
           new UglifyJSPlugin({
               sourceMap: true
           }),
           new webpack.DefinePlugin({
               'process.env': {
                   'NODE_ENV': JSON.stringify('production')
               }
           })
       ]
 });
```
### 0x003 配置脚本
```
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
```
### 0x004 开发
```
npm start
```

### 0x005 打包
```
npm run build
```
