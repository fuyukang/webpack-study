const path                     = require('path');
var UpdatePackageVersionPlugin = require('./UpdatePackageVersionPlugin')

module.exports = {
    entry : {
        'index': ['./src/index.js'],
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new UpdatePackageVersionPlugin({options:true})
    ]
};