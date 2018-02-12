var path               = require('path')
var ManifestPlugin     = require('manifest-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin  = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry  : {
        'index'                : path.resolve(__dirname, 'src/page/index/index.js'),
        'about/about'          : path.resolve(__dirname, 'src/page/about/index.js'),
        'about/contact/contact': path.resolve(__dirname, 'src/page/about/contact/index.js')
    },
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].index.js',
    },
    module : {
        rules: [
            {
                test: /\.pug$/,
                use : "pug-loader"
            },
            {
                test: /\.(scss|css)$/,
                use : ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use     : [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ManifestPlugin(path.join('dist', 'manifest.json')),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
        new HtmlWebpackPlugin({
            title   : '第一个页面',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/page/index/index.pug'),
            inject  : 'head',
            minify  : {
                collapseWhitespace: true,
            },
            chunks  : ['index'],
        }),
        new HtmlWebpackPlugin({
            title   : '第二个页面',
            filename: 'about/about.html',
            template: path.resolve(__dirname, 'src/page/about/index.pug'),
            inject  : 'head',
            minify  : {
                collapseWhitespace: true,
            },
            chunks  : ['contact/contact'],
        }),
        new HtmlWebpackPlugin({
            title   : '第三个页面',
            filename: 'about/contact/contact.html',
            template: path.resolve(__dirname, 'src/page/about/contact/index.pug'),
            inject  : 'head',
            minify  : {
                collapseWhitespace: true,
            },
            chunks  : ['contact/about/about'],

        }),
        new ExtractTextPlugin('[name].css')

    ]
}
