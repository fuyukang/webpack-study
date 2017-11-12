const path                     = require('path');
var CustomPlugin = require('./CustomPlugin')

module.exports = {
    entry : {
        'index': ['./src/index.js'],
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new CustomPlugin({options:true})
    ]
};