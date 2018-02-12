const path = require('path');

module.exports = {
    entry : [
        path.resolve(__dirname,'src/index.js'),
        path.resolve(__dirname,'src/index2.js'),
    ],
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};