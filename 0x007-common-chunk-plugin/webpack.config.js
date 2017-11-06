var path       = require('path')
var webpack    = require('webpack')
module.exports = {
    entry  : {
        index1: path.resolve(__dirname, 'src/index.js'),
        index2: path.resolve(__dirname, 'src/index2.js'),
    },
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name     : ["jquery", "lodash"],
            minChunks: Infinity,
        })
    ]
}
