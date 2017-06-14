'use strict';

let path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/src/main.js'),
    output: {
        path: path.resolve(__dirname + '/dist/js'),
        filename: 'main.js',
        devtoolLineToLine: true
    },
    module: {
        loaders: [
            {
                test: /src\/.+.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.(jpeg|jpg|png|gif)$/, loader: 'url-loader?limit=500000' },
        ]
    }
}
