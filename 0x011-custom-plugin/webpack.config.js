const path               = require('path');
var UpdatePackageVersion = require('./UpdatePackageVersion')

module.exports = {
    entry : {
        'index': ['./src/index.js'],
    },
    output: {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new UpdatePackageVersion()
    ]
};