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
                test: /\.txt$/,
                use : 'raw-loader'
            },
            {
                test: /\.json/,
                use : 'json-loader'
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use : 'file-loader'
            // },
            {
                test: /\.(png|jpg|gif)$/,
                // use : [
                //     {
                //         loader : 'url-loader',
                //         options: {
                //             limit   : 1048576, // 低于1m
                //             name    : '[name].[hash].[ext]',
                //             fallback: 'file-loader' //否则使用`file-loader`
                //         }
                //     }
                // ]
                use : 'url-loader?limit=1045876&name=[name].[hash].[ext]'
            }
        ]
    }
};