import webapck from 'webpack';
import path from 'path';

export default {
    entry: {
        app: ['./src/index.jsx']
    },
    output: {
        path: path.join(__dirname) + '/.dist/',
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    watch: true,
    colors: true
}