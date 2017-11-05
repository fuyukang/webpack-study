var path       = require('path')
module.exports = {
    entry    : ['./src/index.js','./src/index2.js'],
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
}
