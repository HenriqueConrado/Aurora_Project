const webpack = require('webpack')
const ExtractTextPugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: '[hash].js'
    },
    devServer: {
        port: 4000,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPugin('[hash].css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Aurora - Liera',
            template:'src/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file'
        }, {
            test: /\.(json)$/,
            loader: 'file'
        },{
            test: /\.(mov|mp4)$/,
            loader: 'file'
        },
        {
            test: /bootstrap.+\.(jsx|js)$/,
            loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        }
        ]
    }
}