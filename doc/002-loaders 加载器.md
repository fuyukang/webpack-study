### 002 loaders 加载器
---
1. `loader`使用示例
    - 复制`001-gettingstart`到`002-loaders`
    - 安装`css-loader`:`npm install css-loader --save-dev`
    - 配置`css-loader`:
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
    - 新建`app/index.html`
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
    - 新建`app/index.css`
        ```
           * {
               font-family: "Microsoft Sans Serif";
               text-align: center;
               font-size: 50px;
               color: aliceblue;
               background-color: black;
           }
    
    
        ```
    - 修改`app.js`
        ```
        require('./index.css')
        document.write("hello webpack")
    
        ```
    - 浏览器打开`index.html`,并查看元素,可以发现,`css`被注入到了`style`标签中
   ![css-loader](https://github.com/followWinter/webpack-study/raw/master/doc/img/002-css-loader-1.png)
   
   


2. `css-loader`详细使用指南
    

