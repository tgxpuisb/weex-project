const config = require('./webpack.weex.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(config, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.BannerPlugin({
            banner: '// { "framework": "Vue" } \n',
            raw: true,
            exclude: 'Vue'
        })
    ]
})