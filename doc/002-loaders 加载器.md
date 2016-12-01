### 002 loaders 加载器
---
1. 复制`001-gettingstart`到`002-loaders`
2. 安装`css-loader`:`npm install css-loader --save-dev`
3. 配置`css-loader`:
    ```
    //webpack.config.js
    module.exports = {
        entry: './app/app.js',
        output: {
            path: 'dist',
            filename: 'app.bundle.js'
        },
        module: {
            loaders: [
                //正则匹配css结尾的文件,使用`css-loader`
                {test: /\.css$/, loader: "style-loader!css-loader"}
            ]
        }
    }
    ```
4. 新建`app/index.html`
    ```
    <html>
    <head>
        <title>
    
        </title>
        <script src="../dist/app.bundle.js"></script>
    </head>
    <nody>
        
    </nody>
    </html>
    ```
5. 新建`app/index.css`
    ```
   * {
       font-family: "Microsoft Sans Serif";
       text-align: center;
       font-size: 50px;
       color: aliceblue;
       background-color: black;
   }


    ```
6. 修改`app.js`
    ```
    require('./index.css')
    document.write("hello webpack")

    ```
7. 浏览器打开`index.html`,并查看元素,可以发现,`css`被注入到了`style`标签中
   ![UML](https://github.com/followWinter/webpack-study/raw/master/doc/img/002-css-loader-1.png)

    
