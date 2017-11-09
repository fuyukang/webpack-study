const precss = require('precss');
const autoprefixer = require('autoprefixer');
module.exports = ({ file, options, env }) => ({
    plugins: [precss, autoprefixer]
})