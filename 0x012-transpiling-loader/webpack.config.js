const path = require('path');

module.exports = {
    entry  : {
        'index': ['./src/index.js']
    },
    output : {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module : {
        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : {
                    loader: "babel-loader"
                }
            },
            {
                test  : /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}
;