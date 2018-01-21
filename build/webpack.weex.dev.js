// console.log(process.env.npm_config_argv)
const config = require('./webpack.weex.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ip = require('ip').address()

const weexConfig = merge(config, {
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new webpack.BannerPlugin({
            banner: '// { "framework": "Vue" } \n',
            raw: true,
            exclude: 'Vue'
        })
    ]
})

console.log(ip)



module.exports = weexConfig