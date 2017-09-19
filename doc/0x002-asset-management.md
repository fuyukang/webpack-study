### 0x001 加载`css`
1. 安装加载器
```
$ npm install --save-dev style-loader css-loader
```
2. 修改`webpack.config.js`
```javascript
const path = require('path');

module.exports = {
    entry : './src/index.js',
    output: {
        filename: 'bundle.js',
        path    : path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
```

- 添加`src/style.css`
```css
.hello {
  color: red;
}
```
- 修改`src/index.js`
```javascript
import _ from 'lodash'
import './style.css'
function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    return element;
}
document.body.appendChild(component())
```
- 打包
```
$ webpack
Hash: 516b3456bb1135945564
Version: webpack 3.5.6
Time: 806ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  560 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 349 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
   [4] ./src/style.css 1.08 kB {0} [built]
   [5] ./node_modules/_css-loader@0.28.7@css-loader!./src/style.css 182 bytes {0} [built]
    + 4 hidden modules

```
- 浏览效果
打开`index.html`，将会看到红色的`Hello webpack`

### 0x002 加载图片
- 安装加载器
```
$ npm install --save-dev file-loader
```
- 添加`src/icon.jpg`
- 修改`src/icon.jpg`
```javascript
import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'

function component() {
    var element       = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component())
```
- 修改`src/style.css`
```css
.hello {
    color: red;
    background: url('./icon.jpg');
}
```
- 打包
```
$ webpack
Hash: 0ef5ebb7cddb877c4c89
Version: webpack 3.5.6
Time: 868ms
                               Asset    Size  Chunks                    Chunk Names
a3ee6c2484080660028bebce0dbfcbce.jpg   34 kB          [emitted]         
                           bundle.js  561 kB       0  [emitted]  [big]  main
   [0] ./src/icon.jpg 82 bytes {0} [built]
   [1] ./src/index.js 473 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
   [5] ./src/style.css 1.08 kB {0} [built]
   [6] ./node_modules/_css-loader@0.28.7@css-loader!./src/style.css 263 bytes {0} [built]
    + 4 hidden modules

```
- 浏览效果
我们将会看到图片显示在页面中

### 0x003 加载`xml`
- 安装加载器
```
npm install --save-dev xml-loader
```
- `webpack`中添加规则
```
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
```
- 创建数据文件`src/data.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>
```
- 引用
```javascript
import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import Data from './data.xml';


function component() {
    var element       = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    element.classList.add('hello')

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component())
```
- 打包打开页面查看控制台
```
Object:
{to: Array(1), from: Array(1), heading: Array(1), body: Array(1)}
__proto__:Object
```

