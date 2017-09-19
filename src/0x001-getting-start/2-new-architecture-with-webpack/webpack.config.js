/**
 * NAME : webpack.config.js
 * USER : FollowWinter
 * DATE : 2017/9/12
 * SUMMARY :
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
