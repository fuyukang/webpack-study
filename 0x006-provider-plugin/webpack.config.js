var path       = require('path')
var webpack    = require('webpack')
module.exports = {
    entry  : ['./src/index.js'],
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $        : 'jquery',
            jQuery   : 'jquery',
            timestamp: [path.resolve(__dirname, 'src/utils'), 'default']
        })
    ]
}
