var path       = require('path')
module.exports = {
    entry    : './src/index.js',
    output   : {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, ''),
        port       : 9000,
        compress   : true,
        open       : true,
        host       : '0.0.0.0',
        index      : 'index.html'
    },
}
