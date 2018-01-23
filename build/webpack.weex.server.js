// console.log(process.env.npm_config_argv)
const config = require('./webpack.weex.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ip = require('ip').address()
const express = require('express')
const path = require('path')

const app = express()

app.use('/web-resource', express.static(path.resolve(__dirname, './web-server/assets/')))
app.use('/weex-resource', express.static(path.resolve(__dirname, '../dist/')))
app.set('views', path.resolve(__dirname, './web-server'))
app.set('view engine', 'ejs')

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
    ],
    watch: true
})

webpack(weexConfig, (err, stats) => {
    if (err) {
        console.err('COMPILE ERROR:', err.stack)
    }
})

app.get('/', function (req, res) {
    res.render('index', {entries: weexConfig.entry})
})

app.listen(8080, () => {
    console.log('server listen at localhost:8080')
})