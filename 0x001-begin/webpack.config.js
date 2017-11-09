var path       = require('path')
var ManifestPlugin=require('manifest-webpack-plugin')
module.exports = {
    entry    : ['./src/index.js','./src/index2.js'],
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins:[
        new ManifestPlugin(path.join('dist', 'manifest.json'))
    ]
}
