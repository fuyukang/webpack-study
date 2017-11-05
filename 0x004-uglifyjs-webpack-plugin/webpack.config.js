var path           = require('path')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry  : {
        index : path.resolve(__dirname, 'src/index.js'),
        index2: path.resolve(__dirname, 'src/index2.js'),
        index3: path.resolve(__dirname, 'src/index3.js'),
        index4: path.resolve(__dirname, 'src/index4.js')
    },
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    plugins: [
        new UglifyJSPlugin({
            test         : [/index2/,/index3/],
            include      : 'index4.js',
            exclude      : /index/,
            sourceMap    : true,
            uglifyOptions: {
                ie8     : true,
                ecma    : 6,
                mangle  : true,
                compress: true,
                warnings: false
            }
        })
    ]
}
