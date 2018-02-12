const path = require('path');

module.exports = {
    entry : {
        index1: path.resolve(__dirname, 'src/index.js'),
        index2: path.resolve(__dirname, 'src/index2.js'),
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};