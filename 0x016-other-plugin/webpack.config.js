const path               = require('path');
const webpack              = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin=require('copy-webpack-plugin')
module.exports = {
    entry : {
        'index': ['./src/index.js'],
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG   : false
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname,'asset'),
                to:path.resolve(__dirname,'dist/asset')
            }
        ])
    ]
};