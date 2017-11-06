var path       = require('path')
var webpack    = require('webpack')
module.exports = {
    entry  : ['./src/index.js'],
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION            : JSON.stringify(true),
            VERSION               : JSON.stringify("2.0.1"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO                   : "1+1",
            "typeof window"       : JSON.stringify("object"),
            不想写代码                 : JSON.stringify("i like boss"),
            弹窗一下                  : "alert('我弹窗了')"
        })
    ]
}
