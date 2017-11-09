const path         = require('path');
const webpack = require("webpack");
const precss       = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry  : {
        'index': ['./src/index.js'],
    },
    output : {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module : {
        rules: [
            // {
            //     test: /\.css$/,
            //     use : [
            //         {
            //             loader : 'style-loader',
            //             options: {}
            //         },
            //         {
            //             loader : 'file-loader',
            //             options: {
            //                 name: '[name].[ext]'
            //             }
            //         },
            //
            //         // {
            //         //     loader : 'style-loader',
            //         //     options: {}
            //         // },
            //         // {
            //         //     loader : 'css-loader',
            //         //     options: {
            //         //         minimize: true
            //         //     }
            //         // }
            //     ]
            // },
            {
                test: /\.(scss|css)$/,
                use : [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }]
            }
        ]
    }
}
;