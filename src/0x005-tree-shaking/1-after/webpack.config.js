/**
 * NAME : webpack.config.js
 * USER : FollowWinter
 * DATE : 2017/9/12
 * SUMMARY :
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry  : {
        app  : './src/index.js',
    },
    output : {
        filename: '[name].bundle.js',
        path    : path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Tree Shaking'
        })
    ],
};
