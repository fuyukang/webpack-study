const path     = require('path');
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
                test  : /\.js$/,
                loader: "custom-loader",
            }
        ]
    }
}
;
