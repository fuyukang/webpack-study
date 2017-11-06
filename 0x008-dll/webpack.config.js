const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'dll-user': ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             * 在这里引入 manifest 文件
             */
            manifest: require('./dist/vendor-manifest.json')
        })
    ]
};