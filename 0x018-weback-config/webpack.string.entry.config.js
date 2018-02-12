const path = require('path');

module.exports = {
    entry : path.resolve(__dirname, 'src'),
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};