const path = require('path');

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
        test   : /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        include: [path.resolve(__dirname, 'src')],
        loader : "eslint-loader",
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  }
}
;
