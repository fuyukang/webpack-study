/**
 * NAME : webpack.config
 * USER : FollowWinter
 * DATE : 2017/11/25
 * SUMMARY :
 */

var fs        = require('fs')
var path      = require('path')
var page_path = path.join(__dirname, 'src/page')

var inputs = {}
var stats  = fs.statSync(page_path)
if (stats.err) throw  stats.err
if (!stats.isDirectory()) throw page_path + ': is not a directory'

pageTree('', '', page_path)

function pageTree(grande_parent_path, parent_path, page_path) {
    var files = fs.readdirSync(page_path);
    files.forEach(function (item, index) {
        if (item === 'component') return

        var sub_page_path = path.join(page_path, item)

        if (item === 'index.pug') {
            inputs[grande_parent_path ? grande_parent_path + '/' + parent_path + '/' + parent_path : parent_path + '/' + parent_path] = sub_page_path
        }

        var stats = fs.statSync(sub_page_path)


        if (stats.err) throw  stats.err

        if (stats.isDirectory()) {
            pageTree(parent_path, item, path.join(sub_page_path))
        }

    })
}

console.log(inputs)
var HtmlWebpackPlugin    = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

var html = []
var css  = []
for (var key in inputs) {
    var out_path          = inputs[key].match(/\/page\/((\w+\/)+)/)
    var htmlwebpackplugin = new HtmlWebpackPlugin({
        title   : 'extract-text-webpack-plugin',
        filename: out_path[1] + 'index.html',
        template: inputs[key],
        chunks  : [out_path[1] + out_path[2].replace('/', '')],
        inject  : 'head'
    })
    html.push(htmlwebpackplugin)

    var reg      = eval('/' + 'index.scss$/')
    var css_rule = {
        test: /\.scss$/,
        use : ExtractTextPlugin.extract({
            fallback: "style-loader",
            use     : "css-loader"
        })
    }
    css.push(css_rule)
}
var config = {
    entry  : inputs,
    output : {
        path    : path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.pug$/,
                use : "pug-loader"
            },
            {
                test: /\.(scss|css)$/,
                use : [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    ].concat(html)
};


module.exports = config