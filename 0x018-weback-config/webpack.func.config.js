const path = require('path');

module.exports = function (env) {
    console.log('env=',env)
    return {
        entry : {
            'index': ['./src/index.js'],
        },
        output: {
            path    : path.join(__dirname, 'dist'),
            filename: '[name].bundle.js'
        }
    }
}