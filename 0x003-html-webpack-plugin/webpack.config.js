var path              = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry    : {
        index1: './src/index.js',
        index2: './src/index2.js',
        index3: './src/index3.js',
    },
    output   : {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, ''),
        port       : 9000,
        compress   : true,
        open       : true,
        host       : '0.0.0.0',
        index      : 'index.html'
    },
    plugins  : [
        new HtmlWebpackPlugin({
            title         : '自动插入标题',
            filename      : 'admin.html',
            template      : path.resolve(__dirname, 'index.html'),
            inject        : 'head',
            minify:{
                collapseWhitespace:true,
            },
            chunks        : ['index1', 'index3'],
            chunksSortMode: function (chunk1, chunk2) {
                return 1;
            }
        }),
        new HtmlWebpackPlugin({
            title         : '第二个页面',
            filename      : 'index.html',
            template      : path.resolve(__dirname, 'index.html'),
            inject        : 'head',
            minify:{
                collapseWhitespace:true,
            },
            chunks        : ['index1', 'index2'],
            chunksSortMode: function (chunk1, chunk2) {
                return 1;
            },
        })

    ]
}
