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