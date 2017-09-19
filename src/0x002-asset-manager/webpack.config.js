/**
 * NAME : webpack.config.js
 * USER : FollowWinter
 * DATE : 2017/9/12
 * SUMMARY :
 */
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
        ]
    }
};
