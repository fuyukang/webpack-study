const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin   = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');


module.exports = {
    entry  : {
        'index': ['./src/index.js'],
        'index2': ['./src/index2.js']
    },
    output : {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.css$/,
                // use:[
                //     { loader: "style-loader" },
                //     { loader: "css-loader" }
                // ]
                use : ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use     : "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title   : 'extract-text-webpack-plugin',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject  : 'head'
        })
    ]
};