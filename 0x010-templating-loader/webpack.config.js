const path = require('path');

module.exports = {
    entry : {
        'index': ['./src/index.js'],
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.pug$/,
                use : "pug-loader"
            },
            {
                test: /\.html/,
                use :
                    [
                        {
                            loader : "file-loader",
                            options: {
                                name: "[name]-dist.[ext]",
                            },
                        },
                        {
                            loader: "extract-loader",
                        },
                        {
                            loader : 'html-loader',
                            options: {
                                attrs             : [':data-src'],
                                minimize          : true,
                                removeComments    : false,
                                collapseWhitespace: false
                            }
                        }
                    ]
            }
            ,
            {
                test: /\.(png|jpg|gif)$/,
                use :
                    [
                        {
                            loader : 'url-loader',
                            options: {
                                limit   : 1048576, // 低于1m
                                name    : '[name].[hash].[ext]',
                                fallback: 'file-loader' //否则使用`file-loader`
                            }
                        }
                    ]
            }
        ]
    }
}
;