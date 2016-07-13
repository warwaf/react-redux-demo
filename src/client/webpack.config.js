/**
 * 编号    作者   时间        类型      描述
 * 0001   war    16/7/12    新增      新增..
 */
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool:'heap-module-eval-source-map',
    entry:[
        'webpack-hot-middleware/client',
        'client.js'
    ],
    output: {
        path: '../../resource/static/dist',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}